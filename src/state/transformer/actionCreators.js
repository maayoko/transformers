import Transformer from "../../domain/entities/Transformer";
import {
	CREATE_NEW_TRANSFORMER,
	SET_FACTION,
	SET_GEAR,
	SET_NAME,
	SET_SKIN,
	SET_STATUS,
	SET_VEHICLE
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

const setSkin = skin => {
	return { type: SET_SKIN, payload: skin };
};

const setStatus = status => {
	return { type: SET_STATUS, payload: status };
};

const setVehicle = vehicle => {
	return { type: SET_VEHICLE, payload: vehicle };
};

const createNewTransformer = () => {
	return { type: CREATE_NEW_TRANSFORMER, payload: new Transformer() };
};

export { setName, setFaction, setGear, setSkin, setStatus, setVehicle, createNewTransformer };
