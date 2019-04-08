import { CREATE_USER, DELETE_USER } from "./actionTypes";
import * as userPersistence from "persistence/localstorage/user";

const _user = userPersistence.retrieveUser() || null;

const user = (state = _user, action) => {
	switch (action.type) {
		case CREATE_USER:
			return action.payload;

		case DELETE_USER:
			return null;

		default:
			return state;
	}
};

export { user };
