import Transformer from "../../domain/entities/Transformer";
import {
	SET_FACTION,
	SET_GEAR,
	SET_NAME,
	SET_SKIN,
	SET_STATUS,
	SET_VEHICLE,
	CREATE_NEW_TRANSFORMER
} from "./actionTypes";

const transformer = (state = new Transformer(), action) => {
	switch (action.type) {
		case SET_NAME:
			return { ...state, [state.name]: action.payload };

		case SET_FACTION:
			return { ...state, [state.faction]: action.payload };

		case SET_GEAR:
			return { ...state, [state.gear]: [...state.gear, action.payload] };

		case SET_SKIN:
			return { ...state, [state.skin]: action.payload };

		case SET_STATUS:
			return { ...state, [state.status]: action.payload };

		case SET_VEHICLE:
			return { ...state, [state.vehicle]: action.payload };

		case CREATE_NEW_TRANSFORMER:
			return action.payload;

		default:
			return state;
	}
};

export { transformer };
