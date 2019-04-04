import { connect } from "react-redux";
import * as action from "./actionCreators";
import { getCurrentTransformer } from "./selectors";

const withCurrentTransformer = connect(
	state => ({
		currentTransformer: getCurrentTransformer(state)
	}),
	dispatch => ({
		updateName: name => dispatch(action.updateName(name)),
		updateFaction: faction => dispatch(action.updateFaction(faction)),
		updateSkin: skin => dispatch(action.updateSkin(skin)),
		updateVehicle: vehicle => dispatch(action.updateVehicle(vehicle)),
		updateStatus: status => dispatch(action.updateStatus(status)),
		addGear: gear => dispatch(action.addGear(gear)),
		removeGear: gear => dispatch(action.removeGear(gear)),
		clearCurrentTransformer: () => dispatch(action.clearCurrentTransformer()),
		setCurrentTransformer: transformer => dispatch(action.setCurrentTransformer(transformer)),
		updateCurrentTransformer: transformer =>
			dispatch(action.updateCurrentTransformer(transformer)),
		deleteCurrentTransformer: transformer =>
			dispatch(action.deleteCurrentTransformer(transformer))
	})
);

export { withCurrentTransformer };
