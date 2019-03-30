/**
 * External deps
 */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Internal deps
 */
import General from "./General";
import Skin from "./Skin";
import Vehicle from "./Vehicle";
import Gear from "./Gear";
import Preview from "./Preview";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import SidebarLinks from "../../components/SidebarLinks";
import Group from "../../components/Group/Group";

/**
 * Assets
 */
import BackgroundShape from "../../../assets/images/bg_shape_dark@1x.png";

/**
 * Variables
 */
const basePath = "/transformers/add";
const links = [
	{ to: `${basePath}/general`, label: "General" },
	{ to: `${basePath}/skin`, label: "Skin" },
	{ to: `${basePath}/vehicle`, label: "Vehicle" },
	{ to: `${basePath}/gear`, label: "Gear" }
];

const AddNew = ({
	transformer,
	links,
	setName,
	setFaction,
	setGear,
	unsetGear,
	setSkin,
	setStatus,
	setVehicle,
	addTransformer,
	createNewTransformer
}) => {
	const createTransformer = () => {
		addTransformer(transformer);
		createNewTransformer();
	};
	return (
		<BackgroundImage type="shape" src={BackgroundShape}>
			<Group align="between">
				<SidebarLinks links={links} />
				<div>
					<Switch>
						<Route
							exact
							path="/transformers/add/general"
							render={() => (
								<General
									transformer={transformer}
									updateName={setName}
									updateStatus={setStatus}
									updateFaction={setFaction}
								/>
							)}
						/>
						<Route
							exact
							path="/transformers/add/skin"
							render={() => <Skin transformer={transformer} updateSkin={setSkin} />}
						/>
						<Route
							exact
							path="/transformers/add/vehicle"
							render={() => (
								<Vehicle transformer={transformer} updateVehicle={setVehicle} />
							)}
						/>
						<Route
							exact
							path="/transformers/add/gear"
							render={() => (
								<Gear
									transformer={transformer}
									addGear={setGear}
									removeGear={unsetGear}
								/>
							)}
						/>
						<Route
							exact
							path="/transformers/add"
							render={() => <Redirect to="/transformers/add/general" />}
						/>
					</Switch>
				</div>
				<div style={{ paddingRight: "4.8rem" }}>
					<Preview transformer={transformer} onCreate={createTransformer} />
				</div>
			</Group>
		</BackgroundImage>
	);
};

AddNew.propTypes = {
	links: PropTypes.array,
	transformer: PropTypes.shape({}).isRequired,
	setName: PropTypes.func,
	setFaction: PropTypes.func,
	setSkin: PropTypes.func,
	setVehicle: PropTypes.func,
	setGear: PropTypes.func,
	unsetGear: PropTypes.func,
	setStatus: PropTypes.func,
	addTransformer: PropTypes.func,
	createNewTransformer: PropTypes.func
};

AddNew.defaultProps = {
	links,
	setName: () => {},
	setFaction: () => {},
	setSkin: () => {},
	setVehicle: () => {},
	setGear: () => {},
	unsetGear: () => {},
	setStatus: () => {},
	addTransformer: () => {},
	createNewTransformer: () => {}
};

export default AddNew;
