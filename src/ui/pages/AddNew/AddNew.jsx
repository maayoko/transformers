/**
 * External deps
 */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Internal deps
 */
import General from "../common/General";
import Skin from "../common/Skin";
import Vehicle from "../common/Vehicle";
import Gear from "../common/Gear";
import Preview from "../common/Preview";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import SidebarLinks from "../../components/SidebarLinks";
import Group from "../../components/Group/Group";

/**
 * Assets
 */
import BackgroundShape from "../../../assets/images/bg_shape_dark@1x.png";

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
	createNewTransformer,
	breakPoints,
	styles
}) => {
	const createTransformer = () => {
		createNewTransformer(transformer);
	};
	return (
		<BackgroundImage type="shape" src={BackgroundShape}>
			<Group className={styles.root} align="between">
				<Group className={styles.menu_with_options}>
					<SidebarLinks links={links} />
					<div style={{ padding: "0 5rem" }}>
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
								render={() => (
									<Skin transformer={transformer} updateSkin={setSkin} />
								)}
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
							{breakPoints.isTabLand && (
								<Route
									exact
									path="/transformers/add/preview"
									render={() => (
										<Preview
											transformer={transformer}
											onCreate={createTransformer}
										/>
									)}
								/>
							)}
							<Route
								exact
								path="/transformers/add"
								render={() => <Redirect to="/transformers/add/general" />}
							/>
						</Switch>
					</div>
				</Group>
				{!breakPoints.isTabLand && (
					<div className={styles.preview}>
						<Preview transformer={transformer} onCreate={createTransformer} />
					</div>
				)}
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
	createNewTransformer: PropTypes.func,
	styles: PropTypes.shape({})
};

AddNew.defaultProps = {
	links: [],
	setName: () => {},
	setFaction: () => {},
	setSkin: () => {},
	setVehicle: () => {},
	setGear: () => {},
	unsetGear: () => {},
	setStatus: () => {},
	createNewTransformer: () => {},
	styles: {}
};

export default AddNew;
