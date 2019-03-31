import { connect } from "react-redux";
import {
	addTransformer,
	addTransformers,
	removeTransformer,
	updateTransformer
} from "./actionCreators";
import { getTransformers } from "./selectors";

const withTransformers = connect(
	state => ({
		transformers: getTransformers(state)
	}),
	dispatch => ({
		addTransformer: transformer => dispatch(addTransformer(transformer)),
		addTransformers: transformers => dispatch(addTransformers(transformers)),
		removeTransformer: transformer => dispatch(removeTransformer(transformer)),
		updateTransformer: transformer => dispatch(updateTransformer(transformer))
	})
);

export { withTransformers };
