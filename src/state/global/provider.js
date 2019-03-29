import { connect } from "react-redux";
import { getGlobal } from "./selectors";
import { getTransformersData } from "./actionCreators";

const withGlobal = connect(
	state => ({
		global: getGlobal(state)
	}),
	dispatch => ({
		downloadTransformers: () => dispatch(getTransformersData())
	})
);

export { withGlobal };
