import { CREATE_USER, DELETE_USER } from "./actionTypes";

const user = (state = null, action) => {
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
