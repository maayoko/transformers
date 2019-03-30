import { connect } from "react-redux";
import { getGears } from "./selectors";

const withGears = connect(state => ({
	gears: getGears(state)
}));

export { withGears };
