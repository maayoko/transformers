import { connect } from "react-redux";
import { getFactions } from "./selectors";

const withFactions = connect(state => ({
	factions: getFactions(state)
}));

export { withFactions };
