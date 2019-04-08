import { getAuth } from "./selectors";
import { logout } from "./actionCreators";
import { LOGOUT } from "./actionTypes";

const authMiddleware = store => next => action => {
	const auth = getAuth(store.getState());

	if (auth.authenticated && action.type !== LOGOUT) {
		const loggedIn = auth.token.expiresAt > new Date().getTime();
		if (!loggedIn) {
			return store.dispatch(logout());
		}
	}

	return next(action);
};

export { authMiddleware };
