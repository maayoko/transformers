import * as transformerService from "domain/services/transformerService";
import * as transformerApi from "api/transformers";
import { addTransformer } from "../transformers";
import {
	CREATE_DEFAULT_TRANSFORMER,
	SET_FACTION,
	SET_GEAR,
	SET_NAME,
	SET_SKIN,
	SET_STATUS,
	SET_VEHICLE,
	UNSET_GEAR,
	CREATE_NEW_TRANSFORMER_PENDING,
	CREATE_NEW_TRANSFORMER_SUCCESS,
	CREATE_NEW_TRANSFORMER_FAILURE
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

const createDefaultTransformer = () => (dispatch, getState) => {
	dispatch({
		type: CREATE_DEFAULT_TRANSFORMER,
		payload: transformerService.createDefaultTransformer(getState())
	});
};

const createNewTransformer = transformer => async dispatch => {
	dispatch({ type: CREATE_NEW_TRANSFORMER_PENDING, payload: "Creating new transformer" });
	try {
		const response = await transformerApi.createNewTransformer(transformer);
		const _transformer = await response.json();
		dispatch({
			type: CREATE_NEW_TRANSFORMER_SUCCESS,
			payload: "Transformer created succesfully"
		});
		dispatch(addTransformer(_transformer));
		dispatch(createDefaultTransformer());
	} catch (e) {
		dispatch({
			type: CREATE_NEW_TRANSFORMER_FAILURE,
			payload: "Failed to create a transformer"
		});
	}
};

export {
	setName,
	setFaction,
	setGear,
	unsetGear,
	setSkin,
	setStatus,
	setVehicle,
	createDefaultTransformer,
	createNewTransformer
};
