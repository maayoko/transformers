import * as authApi from "api/auth";
import { getGoogleUserDetails, getGoogleAuthDetails } from "api/auth/selectors";
import * as authService from "domain/services/authService";
import { createUser, getUserLink, getUser } from "../user";
import { getCredentials } from "../global";
import * as authPersistence from "persistence/localstorage/auth";
import * as userPersistence from "persistence/localstorage/user";
import { push } from "react-router-redux";
import debug from "debug";
import {
	GOOGLE_LOGIN_FAILURE,
	GOOGLE_LOGIN_PENDING,
	GOOGLE_LOGIN_SUCCESS,
	GOOGLE_LOGOUT_FAILURE,
	GOOGLE_LOGOUT_PENDING,
	GOOGLE_LOGOUT_SUCCESS,
	GOOGLE_LOGOUT,
	LOGOUT,
	LOGIN
} from "./actionTypes";
import { getAuth } from "./selectors";

const authDebug = debug("auth:actions");

const login = credentials => (dispatch, getState) => {
	dispatch({ type: LOGIN, payload: credentials });
	dispatch(push(`/users/${getUserLink(getState())}`));
	authPersistence.insertCredentials(getAuth(getState()));
	userPersistence.insertUser(getUser(getState()));
};

const googleLogin = () => async (dispatch, getState) => {
	dispatch({ type: GOOGLE_LOGIN_PENDING, payload: "Signin in. Please wait." });
	try {
		const response = await authApi.googleLogin(getCredentials(getState()));
		dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: "You've succesfully logged in." });
		dispatch(createUser(getGoogleUserDetails(response)));
		dispatch(login(authService.createAuth(getState(), getGoogleAuthDetails(response))));
	} catch (e) {
		authDebug(e);
		dispatch({ type: GOOGLE_LOGIN_FAILURE, payload: "Login faild. Please try again." });
	}
};

const googleLogout = () => async (dispatch, getState) => {
	dispatch({ type: GOOGLE_LOGOUT_PENDING, payload: "Logging out. Please wait." });
	try {
		await authApi.googleLogout(getCredentials(getState()));
		dispatch({ type: GOOGLE_LOGOUT_SUCCESS, payload: "You've succesfully logged out." });
		dispatch({ type: GOOGLE_LOGOUT, payload: null });
		dispatch(push("/login"));
	} catch (e) {
		dispatch({
			type: GOOGLE_LOGOUT_FAILURE,
			payload: "Couldn't log you out. Please try again."
		});
	}
};

const logout = () => (dispatch, getState) => {
	dispatch({ type: LOGOUT });
	authPersistence.insertCredentials(getAuth(getState()));
	userPersistence.clearUser();
};

export { googleLogin, googleLogout, logout };
