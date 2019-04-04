import * as authApi from "api/auth";
import { getGoogleUserDetails, getGoogleAuthDetails } from "api/auth/selectors";
import * as authService from "domain/services/authService";
import { createUser } from "../user";
import { getCredentials } from "../global";
import { push } from "react-router-redux";
import {
	GOOGLE_LOGIN_FAILURE,
	GOOGLE_LOGIN_PENDING,
	GOOGLE_LOGIN_SUCCESS,
	GOOGLE_LOGOUT_FAILURE,
	GOOGLE_LOGOUT_PENDING,
	GOOGLE_LOGOUT_SUCCESS,
	GOOGLE_LOGIN,
	GOOGLE_LOGOUT
} from "./actionTypes";

const googleLogin = () => async (dispatch, getState) => {
	dispatch({ type: GOOGLE_LOGIN_PENDING, payload: "Signin in. Please wait." });
	try {
		const response = await authApi.googleLogin(getCredentials(getState()));
		dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: "You've succesfully logged in." });
		dispatch(createUser(getGoogleUserDetails(response)));
		dispatch({
			type: GOOGLE_LOGIN,
			payload: authService.createAuth(getState(), getGoogleAuthDetails(response))
		});
		dispatch(push("/calendar"));
	} catch (e) {
		dispatch({ type: GOOGLE_LOGIN_FAILURE, payload: "Login faild. Please try again." });
	}
};

const googleLogout = () => async (dispatch, getState) => {
	dispatch({ type: GOOGLE_LOGOUT_PENDING, payload: "Logging out. Please wait." });
	try {
		const response = await authApi.googleLogout(getCredentials(getState()));
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

export { googleLogin, googleLogout };
