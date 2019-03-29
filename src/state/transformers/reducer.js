import { ADD_TRANSFORMER, ADD_TRANSFORMERS, REMOVE_TRANSFORMER } from "./actionTypes";

const transformers = (state = [], action) => {
	switch (action.type) {
		case ADD_TRANSFORMER:
			return [...state, action.payload];

		case ADD_TRANSFORMERS:
			return [...state, ...action.payload];

		case REMOVE_TRANSFORMER:
			return [...state.filter(transformer => transformer._id !== action.payload._id)];

		default:
			return state;
	}
};

export { transformers };
