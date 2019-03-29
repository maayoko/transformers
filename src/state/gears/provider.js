import { connect } from "react-redux";
import { getGears } from "./selectors";

const withGears = connect(state => ({
	factions: getGears(state)
}));

export { withGears };
