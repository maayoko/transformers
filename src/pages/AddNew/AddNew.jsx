/**
 * External deps
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * Internal deps
 */
import Typography from "../../components/Typography/Typography";
import General from "./General";
import Skin from "./Skin";
import Vehicle from "./Vehicle";
import Gear from "./Gear";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import SidebarLinks from "../../components/SidebarLinks/SidebarLinks";
import Group from "../../components/Group/Group";
import styles from "./AddNew.module.scss";

/**
 * Assets
 */
import BackgroundShape from "../../assets/images/bg_shape_dark@1x.png";

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

const AddNew = () => {
	return (
		<BackgroundImage type="shape" src={BackgroundShape}>
			<Group align="between" className={styles.root}>
				<SidebarLinks links={links} />
				<div>
					<Route exact path="/transformers/add/general" component={General} />
					<Route exact path="/transformers/add/skin" component={Skin} />
					<Route exact path="/transformers/add/vehicle" component={Vehicle} />
					<Route exact path="/transformers/add/gear" component={Gear} />
					<Route
						exact
						path="/transformers/add"
						component={() => <Redirect to="/transformers/add/general" />}
					/>
				</div>
				<div style={{ paddingRight: "4.8rem" }}>
					<Group>
						<Image
							src="/assets/transformers-robots/transformer-not-selected-gold.png"
							title="Not selected transformer"
							className={styles["preview-1"]}
						/>
						<Group vertical>
							<div style={{ textAlign: "center" }}>
								<Image
									src="/assets/png/logo-not-selected-gold.png"
									title="Not selected logo"
									className={styles["preview-2"]}
								/>
							</div>
							<Group vertical style={{ marginTop: "2.2rem" }}>
								<Typography color="white" opacity="low" size="body-big">
									Name
								</Typography>
								<Typography color="white" size="body-big">
									Bumblebee
								</Typography>
							</Group>
							<Group vertical style={{ marginTop: "2.2rem" }}>
								<Typography color="white" opacity="low" size="body-big">
									Faction
								</Typography>
								<Typography color="white" size="body-big">
									Autobots
								</Typography>
							</Group>
							<Group vertical style={{ marginTop: "2.2rem" }}>
								<Typography color="white" opacity="low" size="body-big">
									Status
								</Typography>
								<div style={{ textAlign: "center", marginTop: "1.2rem" }}>
									<Image
										src="/assets/svg/health_level_gold.svg"
										title="Health level"
										type="preview-3"
									/>
								</div>
							</Group>
						</Group>
					</Group>
					<Group align="between" style={{ marginTop: "4.2rem" }}>
						<Group vertical>
							<Typography color="white" opacity="low" size="body-big">
								Vehicle
							</Typography>
							<Image
								src="/assets/transformers-robots/transformer-car-not-selected-gold.png"
								title="Not selected car"
								className={styles["preview-3"]}
							/>
						</Group>
						<Group vertical>
							<Typography color="white" opacity="low" size="body-big">
								Gear
							</Typography>
							<Image
								src="/assets/weapons/weapon-not-selected-gold.png"
								title="Not selected weapon"
								className={styles["preview-3"]}
							/>
						</Group>
					</Group>
					<div style={{ textAlign: "center", width: "100%", marginTop: "3rem" }}>
						<Button>Create me</Button>
					</div>
				</div>
			</Group>
		</BackgroundImage>
	);
};

export default AddNew;
