import { connect } from "react-redux";
import { addTransformer, removeTransformer } from "./actionCreators";
import { getTransformers } from "./selectors";

const withTransformers = connect(
	state => ({
		transformers: getTransformers(state)
	}),
	dispatch => ({
		addTransformer: transformer => dispatch(addTransformer(transformer)),
		removeTransformer: transformer => dispatch(removeTransformer(transformer))
	})
);

export { withTransformers };
