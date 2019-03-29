import { NOTIFICATIONS_RESET } from "./actionTypes";

const notifications = (state = null, action) => {
	if (action.type.match(/(FAILURE|SUCCESS|PENDING)/g)) {
		return { message: action.payload };
	}

	switch (action.type) {
		case NOTIFICATIONS_RESET:
			return null;

		default:
			return state;
	}
};

export { notifications };
