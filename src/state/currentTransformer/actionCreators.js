import {
	UPDATE_CURRENT_TRANSFORMER_FACTION,
	UPDATE_CURRENT_TRANSFORMER_NAME,
	UPDATE_CURRENT_TRANSFORMER_SKIN,
	UPDATE_CURRENT_TRANSFORMER_STATUS,
	UPDATE_CURRENT_TRANSFORMER_VEHICLE,
	ADD_CURRENT_TRANSFORMER_GEAR,
	REMOVE_CURRENT_TRANSFORMER_GEAR,
	CLEAR_CURRENT_TRANSFORMER,
	SET_CURRENT_TRANSFORMER
} from "./actionTypes";

const updateName = name => {
	return { type: UPDATE_CURRENT_TRANSFORMER_NAME, payload: name };
};

const updateFaction = faction => {
	return { type: UPDATE_CURRENT_TRANSFORMER_FACTION, payload: faction };
};

const addGear = gear => {
	return { type: ADD_CURRENT_TRANSFORMER_GEAR, payload: gear };
};

const removeGear = gear => {
	return { type: REMOVE_CURRENT_TRANSFORMER_GEAR, payload: gear };
};

const updateSkin = skin => {
	return { type: UPDATE_CURRENT_TRANSFORMER_SKIN, payload: skin };
};

const updateStatus = status => {
	return { type: UPDATE_CURRENT_TRANSFORMER_STATUS, payload: status };
};

const updateVehicle = vehicle => {
	return { type: UPDATE_CURRENT_TRANSFORMER_VEHICLE, payload: vehicle };
};

const clearCurrentTransformer = () => {
	return { type: CLEAR_CURRENT_TRANSFORMER, payload: null };
};

const setCurrentTransformer = transformer => {
	console.log(transformer);
	return { type: SET_CURRENT_TRANSFORMER, payload: transformer };
};

export {
	updateName,
	updateFaction,
	addGear,
	removeGear,
	updateSkin,
	updateStatus,
	updateVehicle,
	setCurrentTransformer,
	clearCurrentTransformer
};
