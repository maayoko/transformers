import { connect } from "react-redux";
import * as action from "./actionCreators";
import { getTransformer } from "./selectors";

const withTransformer = connect(
	state => ({
		transformer: getTransformer(state)
	}),
	dispatch => ({
		setName: name => dispatch(action.setName(name)),
		setFaction: faction => dispatch(action.setFaction(faction)),
		setSkin: skin => dispatch(action.setSkin(skin)),
		setVehicle: vehicle => dispatch(action.setVehicle(vehicle)),
		setStatus: status => dispatch(action.setStatus(status)),
		setGear: gear => dispatch(action.setGear(gear)),
		unsetGear: gear => dispatch(action.unsetGear(gear)),
		createNewTransformer: () => dispatch(action.createNewTransformer())
	})
);

export { withTransformer };
