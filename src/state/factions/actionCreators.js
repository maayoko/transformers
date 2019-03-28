import { ADD_FACTION, ADD_FACTIONS } from "./actionTypes";

const addFaction = faction => {
	return { type: ADD_FACTION, payload: faction };
};

const addFactions = factions => {
	return { type: ADD_FACTIONS, payload: factions };
};

export { addFaction, addFactions };
