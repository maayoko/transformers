import * as transformersApi from "api/transformers";
import { updateTransformer, removeTransformer } from "../transformers";
import { push } from "react-router-redux";
import {
	UPDATE_CURRENT_TRANSFORMER_FACTION,
	UPDATE_CURRENT_TRANSFORMER_NAME,
	UPDATE_CURRENT_TRANSFORMER_SKIN,
	UPDATE_CURRENT_TRANSFORMER_STATUS,
	UPDATE_CURRENT_TRANSFORMER_VEHICLE,
	ADD_CURRENT_TRANSFORMER_GEAR,
	REMOVE_CURRENT_TRANSFORMER_GEAR,
	CLEAR_CURRENT_TRANSFORMER,
	SET_CURRENT_TRANSFORMER,
	DELETE_CURRENT_TRANSFORMER_FAILURE,
	DELETE_CURRENT_TRANSFORMER_PENDING,
	DELETE_CURRENT_TRANSFORMER_SUCCESS,
	UPDATE_CURRENT_TRANSFORMER_FAILURE,
	UPDATE_CURRENT_TRANSFORMER_PENDING,
	UPDATE_CURRENT_TRANSFORMER_SUCCESS
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
	return { type: SET_CURRENT_TRANSFORMER, payload: transformer };
};

const updateCurrentTransformer = transformer => async dispatch => {
	dispatch({
		type: UPDATE_CURRENT_TRANSFORMER_PENDING,
		payload: "Updating current transformer."
	});
	try {
		const response = await transformersApi.updateCurrentTransformer(transformer);
		// const _transformer = await response.json();
		const _transformer = transformer;
		dispatch({
			type: UPDATE_CURRENT_TRANSFORMER_SUCCESS,
			payload: "Current transformer updated"
		});
		dispatch(updateTransformer(_transformer));
	} catch (e) {
		dispatch({
			type: UPDATE_CURRENT_TRANSFORMER_FAILURE,
			payload: "Current transformer couldn't be updated."
		});
	}
};

const deleteCurrentTransformer = transformer => async dispatch => {
	dispatch({
		type: DELETE_CURRENT_TRANSFORMER_PENDING,
		payload: "Deleting current transformer."
	});
	try {
		const response = await transformersApi.deleteCurrentTransformer({ id: transformer.id });
		await response.json();
		dispatch({
			type: DELETE_CURRENT_TRANSFORMER_SUCCESS,
			payload: "Current transformer succesfully deleted."
		});
		dispatch(removeTransformer(transformer));
		setTimeout(() => dispatch(push("/")), 1000);
	} catch (e) {
		dispatch({
			type: DELETE_CURRENT_TRANSFORMER_FAILURE,
			payload: "Current transformer couldn't be deleted."
		});
	}
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
	clearCurrentTransformer,
	updateCurrentTransformer,
	deleteCurrentTransformer
};
