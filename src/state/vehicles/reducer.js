import Vehicle from "../../domain/entities/Vehicle";
import { ADD_VEHICLE, ADD_VEHICLES } from "./actionTypes";

const vehicles = (state = [], action) => {
	switch (action.type) {
		case ADD_VEHICLE:
			return [...state, new Vehicle(action.payload)];

		case ADD_VEHICLES:
			return [...state, ...action.payload.map(status => new Faction(status))];

		default:
			return state;
	}
};

export { vehicles };
