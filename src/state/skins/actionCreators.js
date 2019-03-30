import { ADD_SKIN, ADD_SKINS } from "./actionTypes";
import * as skinService from "domain/services/skinService";

const addSkin = skin => {
	return { type: ADD_SKIN, payload: skin };
};

const addSkins = skins => {
	return { type: ADD_SKINS, payload: skins };
};

const createSkins = () => (dispatch, getState) => {
	dispatch(addSkins(skinService.createSkins(getState())));
};

export { addSkin, addSkins, createSkins };
