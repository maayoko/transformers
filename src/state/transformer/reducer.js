import Transformer from "../../domain/entities/Transformer";
import helpers from "core/common/helpers";
import {
	SET_FACTION,
	SET_GEAR,
	UNSET_GEAR,
	SET_NAME,
	SET_SKIN,
	SET_STATUS,
	SET_VEHICLE,
	CREATE_NEW_TRANSFORMER
} from "./actionTypes";

const transformer = (state = new Transformer(), action) => {
	switch (action.type) {
		case SET_NAME:
			return {
				...state,
				name: action.payload,
				link: helpers.replaceWithDash(action.payload)
			};

		case SET_FACTION:
			return { ...state, faction: action.payload };

		case SET_GEAR:
			return { ...state, gear: [...state.gear, action.payload] };

		case UNSET_GEAR:
			return {
				...state,
				gear: [...state.gear.filter(gear => gear._id !== action.payload._id)]
			};

		case SET_SKIN:
			return { ...state, skin: action.payload };

		case SET_STATUS:
			return { ...state, status: action.payload };

		case SET_VEHICLE:
			return { ...state, vehicle: action.payload };

		case CREATE_NEW_TRANSFORMER:
			return action.payload;

		default:
			return state;
	}
};

export { transformer };
