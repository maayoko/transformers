import { createDefaultTransformer } from "domain/services/transformerService";
import {
	CREATE_NEW_TRANSFORMER,
	SET_FACTION,
	SET_GEAR,
	SET_NAME,
	SET_SKIN,
	SET_STATUS,
	SET_VEHICLE,
	UNSET_GEAR
} from "./actionTypes";

const setName = name => {
	return { type: SET_NAME, payload: name };
};

const setFaction = faction => {
	return { type: SET_FACTION, payload: faction };
};

const setGear = gear => {
	return { type: SET_GEAR, payload: gear };
};

const unsetGear = gear => {
	return { type: UNSET_GEAR, payload: gear };
};

const setSkin = skin => {
	return { type: SET_SKIN, payload: skin };
};

const setStatus = status => {
	return { type: SET_STATUS, payload: status };
};

const setVehicle = vehicle => {
	return { type: SET_VEHICLE, payload: vehicle };
};

const createNewTransformer = () => (dispatch, getState) => {
	dispatch({ type: CREATE_NEW_TRANSFORMER, payload: createDefaultTransformer(getState()) });
};

export {
	setName,
	setFaction,
	setGear,
	unsetGear,
	setSkin,
	setStatus,
	setVehicle,
	createNewTransformer
};
