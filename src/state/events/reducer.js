import { GET_EVENTS, UPDATE_EVENT } from "./actionTypes";

const events = (state = [], action) => {
	switch (action.type) {
		case GET_EVENTS:
			return [...action.payload];

		case UPDATE_EVENT:
			return [
				...state.reduce((acc, event) => {
					const latestEvent = event._id === action.payload._id ? action.payload : event;
					acc.push(latestEvent);
					return acc;
				}, [])
			];

		default:
			return state;
	}
};

export { events };
