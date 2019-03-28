import { ADD_TRANSFORMER, REMOVE_TRANSFORMER } from "./actionTypes";

const addTransformer = transformer => {
	return { type: ADD_TRANSFORMER, payload: transformer };
};

const removeTransformer = transformer => {
	return { type: REMOVE_TRANSFORMER, payload: transformer };
};

export { addTransformer, removeTransformer };
