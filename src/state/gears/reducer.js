import { ADD_GEAR, ADD_GEARS } from "./actionTypes";

const gears = (state = [], action) => {
	switch (action.type) {
		case ADD_GEAR:
			return [...state, action.payload];

		case ADD_GEARS:
			return [...state, ...action.payload];

		default:
			return state;
	}
};

export { gears };
