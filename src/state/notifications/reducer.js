import { ADD_STATUS, ADD_STATUSES } from "./actionTypes";

const notifications = (state = [], action) => {
	switch (action.type) {
		case ADD_STATUS:
			return [...state, action.payload];

		case ADD_STATUSES:
			return [...state, ...action.payload];

		default:
			return state;
	}
};

export { statuses };
