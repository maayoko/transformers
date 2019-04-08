import Auth from "domain/entities/auth/Auth";
import * as authPersistence from "persistence/localstorage/auth";
import { GOOGLE_LOGIN, GOOGLE_LOGOUT, LOGOUT, LOGIN } from "./actionTypes";

const authenticated = false;
const _auth = authPersistence.retrieveCredentials() || new Auth(authenticated);

const auth = (state = _auth, action) => {
	switch (action.type) {
		case GOOGLE_LOGIN:
		case LOGIN:
			return action.payload;

		case GOOGLE_LOGOUT:
		case LOGOUT:
			console.log(state);
			return new Auth(authenticated);

		default:
			return state;
	}
};

export { auth };
