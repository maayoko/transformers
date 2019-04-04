import Auth from "domain/entities/auth/Auth";
import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from "./actionTypes";

const _auth = new Auth(false);

const auth = (state = _auth, action) => {
	switch (action.type) {
		case GOOGLE_LOGIN:
			return action.payload;

		case GOOGLE_LOGOUT:
			return _auth;

		default:
			return state;
	}
};

export { auth };
