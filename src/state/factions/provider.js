import { connect } from "react-redux";
import { getFactions, getFactionsOptions } from "./selectors";

const withFactions = connect(state => ({
	factions: getFactions(state),
	factionsOptions: getFactionsOptions(state)
}));

export { withFactions };
