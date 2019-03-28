import Vehicle from "../../domain/entities/Vehicle";
import { ADD_VEHICLE, ADD_VEHICLES } from "./actionTypes";

const vehicles = (state = [], action) => {
	switch (action.type) {
		case ADD_VEHICLE:
			return [...state, new Vehicle(action.payload)];

		case ADD_VEHICLES:
			return [...state, ...action.payload.map(vehicle => new Vehicle(vehicle))];

		default:
			return state;
	}
};

export { vehicles };
