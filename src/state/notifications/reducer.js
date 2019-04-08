import { NOTIFICATIONS_RESET } from "./actionTypes";

const notifications = (state = null, action) => {
	if (action.type.match(/(FAILURE|SUCCESS|PENDING)/g)) {
		const { payload, ...other } = action;
		return { message: payload, ...other };
	}

	switch (action.type) {
		case NOTIFICATIONS_RESET:
			return null;

		default:
			return state;
	}
};

export { notifications };
