import { ADD_SKIN, ADD_SKINS } from "./actionTypes";

const skins = (state = [], action) => {
	switch (action.type) {
		case ADD_SKIN:
			return [...state, action.payload];

		case ADD_SKINS:
			return [...state, ...action.payload];

		default:
			return state;
	}
};

export { skins };
