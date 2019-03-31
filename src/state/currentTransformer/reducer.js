import helpers from "core/common/helpers";
import {
	UPDATE_CURRENT_TRANSFORMER_FACTION,
	UPDATE_CURRENT_TRANSFORMER_NAME,
	UPDATE_CURRENT_TRANSFORMER_SKIN,
	UPDATE_CURRENT_TRANSFORMER_STATUS,
	UPDATE_CURRENT_TRANSFORMER_VEHICLE,
	ADD_CURRENT_TRANSFORMER_GEAR,
	REMOVE_CURRENT_TRANSFORMER_GEAR,
	CLEAR_CURRENT_TRANSFORMER,
	SET_CURRENT_TRANSFORMER
} from "./actionTypes";

const currentTransformer = (state = null, action) => {
	switch (action.type) {
		case UPDATE_CURRENT_TRANSFORMER_NAME:
			return {
				...state,
				name: action.payload,
				link: helpers.replaceWithDash(action.payload)
			};

		case UPDATE_CURRENT_TRANSFORMER_FACTION:
			return { ...state, faction: action.payload };

		case ADD_CURRENT_TRANSFORMER_GEAR:
			return { ...state, gear: [...state.gear, action.payload] };

		case REMOVE_CURRENT_TRANSFORMER_GEAR:
			return {
				...state,
				gear: [...state.gear.filter(gear => gear._id !== action.payload._id)]
			};

		case UPDATE_CURRENT_TRANSFORMER_SKIN:
			return { ...state, skin: action.payload };

		case UPDATE_CURRENT_TRANSFORMER_STATUS:
			return { ...state, status: action.payload };

		case UPDATE_CURRENT_TRANSFORMER_VEHICLE:
			return { ...state, vehicle: action.payload };

		case CLEAR_CURRENT_TRANSFORMER:
			return action.payload;

		case SET_CURRENT_TRANSFORMER:
			return { ...action.payload };

		default:
			return state;
	}
};

export { currentTransformer };
