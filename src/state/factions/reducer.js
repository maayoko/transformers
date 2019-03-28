import Faction from "../../domain/entities/Faction";
import { ADD_FACTION, ADD_FACTIONS } from "./actionTypes";

const factions = (state = [], action) => {
	switch (action.type) {
		case ADD_FACTION:
			return [...state, new Faction(action.payload)];

		case ADD_FACTIONS:
			return [...state, ...action.payload.map(status => new Faction(status))];

		default:
			return state;
	}
};

export { factions };
