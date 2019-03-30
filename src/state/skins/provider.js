import { connect } from "react-redux";
import { getSkins } from "./selectors";

const withSkins = connect(state => ({
	skins: getSkins(state)
}));

export { withSkins };
