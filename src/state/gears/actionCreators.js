import { ADD_GEAR, ADD_GEARS } from "./actionTypes";

const addGear = gear => {
	return { type: ADD_GEAR, payload: gear };
};

const addGears = gears => {
	return { type: ADD_GEARS, payload: gears };
};

export { addGear, addGears };
