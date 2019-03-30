import { ADD_GEAR, ADD_GEARS } from "./actionTypes";
import * as gearService from "domain/services/gearService";

const addGear = gear => {
	return { type: ADD_GEAR, payload: gear };
};

const addGears = gears => {
	return { type: ADD_GEARS, payload: gears };
};

const createGears = () => (dispatch, getState) => {
	dispatch(addGears(gearService.createGears(getState())));
};

export { addGear, addGears, createGears };
