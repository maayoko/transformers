import { ADD_FACTION, ADD_FACTIONS } from "./actionTypes";

const factions = (state = [], action) => {
	switch (action.type) {
		case ADD_FACTION:
			return [...state, action.payload];

		case ADD_FACTIONS:
			return [...state, ...action.payload];

		default:
			return state;
	}
};

export { factions };
