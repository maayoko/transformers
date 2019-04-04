import { connect } from "react-redux";
import { getVehicles, getVehicleGroup, getVehicleTypes } from "./selectors";

const withVehicles = connect(state => ({
	vehicles: getVehicles(state),
	vehicleTypes: getVehicleTypes(state),
	vehicleGroups: getVehicleGroup(state)
}));

export { withVehicles };
