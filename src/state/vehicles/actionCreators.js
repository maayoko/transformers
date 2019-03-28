import { ADD_VEHICLE, ADD_VEHICLES } from "./actionTypes";

const addVehicle = vehicle => {
	return { type: ADD_VEHICLE, payload: vehicle };
};

const addVehicles = vehicles => {
	return { type: ADD_VEHICLES, payload: vehicles };
};

export { addVehicle, addVehicles };
