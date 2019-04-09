import { GET_EVENTS, UPDATE_EVENT, DELETE_EVENT, ADD_EVENT, LOGOUT } from "./actionTypes";

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

		case DELETE_EVENT:
			return [...state.filter(event => event._id !== action.payload._id)];

		case ADD_EVENT:
			return [...state, action.payload];

		case LOGOUT:
			return [];

		default:
			return state;
	}
};

export { events };
