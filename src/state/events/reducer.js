import { GET_EVENTS } from "./actionTypes";

const events = (state = [], action) => {
	switch (action.type) {
		case GET_EVENTS:
			return [...action.payload];

		default:
			return state;
	}
};

export { events };
