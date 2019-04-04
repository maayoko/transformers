import { GOOGLE_LOGIN_FAILURE, GOOGLE_LOGIN_PENDING, GOOGLE_LOGIN_SUCCESS } from "./actionTypes";

export const googleLogin = credentials => async (dispatch, getState) => {
	dispatch({ type: GOOGLE_LOGIN_PENDING, payload: "Sign in. Please wait." });
	return { type: GOOGLE_LOGIN, payload: credentials };
};
