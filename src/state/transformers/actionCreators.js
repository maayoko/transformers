import {
	ADD_TRANSFORMER,
	ADD_TRANSFORMERS,
	REMOVE_TRANSFORMER,
	UPDATE_TRANSFORMER
} from "./actionTypes";

const addTransformer = transformer => {
	return { type: ADD_TRANSFORMER, payload: transformer };
};

const addTransformers = transformers => {
	return { type: ADD_TRANSFORMERS, payload: transformers };
};

const removeTransformer = transformer => {
	return { type: REMOVE_TRANSFORMER, payload: transformer };
};

const updateTransformer = transformer => {
	return { type: UPDATE_TRANSFORMER, payload: transformer };
};

export { addTransformer, addTransformers, removeTransformer, updateTransformer };
