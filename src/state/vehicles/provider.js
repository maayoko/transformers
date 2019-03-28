import { connect } from "react-redux";
import { getVehicles } from "./selectors";

const withVehicles = connect(state => ({
	vehicles: getVehicles(state)
}));

export { withVehicles };
