import { connect } from "react-redux";
import { openOverlay, closeOverlay } from "./actionCreators";
import { getOverlay } from "./selectors";

const withTransformers = connect(
	state => ({
		overlay: getOverlay(state)
	}),
	dispatch => ({
		openOverlay: () => dispatch(openOverlay()),
		closeOverlay: () => dispatch(closeOverlay())
	})
);

export { withTransformers };
