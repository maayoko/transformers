import { ADD_VEHICLE, ADD_VEHICLES } from "./actionTypes";

const vehicles = (state = [], action) => {
	switch (action.type) {
		case ADD_VEHICLE:
			return [...state, action.payload];

		case ADD_VEHICLES:
			return [...state, ...action.payload];

		default:
			return state;
	}
};

export { vehicles };
