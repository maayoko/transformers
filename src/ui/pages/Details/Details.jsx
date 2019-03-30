/**
 * External deps
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Internal deps
 */
import styles from "./Details.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Typography from "../../components/Typography/Typography";
import Image from "../../components/Image/Image";
import Group from "../../components/Group/Group";

/**
 * Assets
 */
import BackgroundShape from "../../../assets/images/bg_shape_dark@1x.png";

/**
 * Variables
 */
const transformer = {
	_id: "afb9191d-d859-4918-8da4-ccfb5c5b0b01",
	skin: {
		name: "optimus-prime",
		image: {
			_id: "0be6d656-0931-4e46-b3f4-7d35ebfae1fb",
			standard: "/assets/images/skins/optimus-prime.png",
			gold: "",
			dark: ""
		}
	},
	name: "Optimus Prime",
	vehicle: {
		_id: "4b0ad81a-0349-4370-8e02-ee67cab375c9",
		image: {
			_id: "f1fbb299-1005-49d6-ab93-1ab0c77b4682",
			standard: "/assets/images/vehicles/western-star-5700.png",
			gold: "",
			dark: ""
		},
		group: "Land",
		type: "Truck",
		model: "Western Star 5700"
	},
	faction: {
		_id: "cbe7bf91-04e7-41cc-aed0-e07cdeede886",
		image: {
			_id: "89307493-7701-4b3f-9a36-2cca93829f79",
			standard: "/assets/images/factions/autobots-gold.svg",
			gold: "/assets/images/factions/autobots-gold.svg",
			dark: "/assets/images/factions/autobots-black.png"
		},
		name: "Autobots"
	},
	gear: [
		{
			_id: "ade9ea16-2c55-44df-b9df-bcd0616ce7bc",
			image: {
				_id: "025d8443-ae09-4bc7-ac83-0f7d53fbd4d1",
				standard: "/assets/images/gears/sword.png",
				gold: "",
				dark: ""
			},
			name: "sword"
		},
		{
			_id: "cd3e4585-a80d-471f-be1a-e36e484ac4b5",
			image: {
				_id: "5f532a9a-8561-43b6-a05b-b1be3299e92d",
				standard: "/assets/images/gears/shield.png",
				gold: "",
				dark: ""
			},
			name: "shield"
		}
	],
	status: {
		_id: "a4aa5162-0703-4f8c-903a-9aa4dbcef360",
		image: {
			_id: "ab2a8be3-2ee2-4a0f-9eb6-ae8f855f68f7",
			standard: "/assets/images/common/health_level_gold.svg",
			gold: "/assets/images/common/health_level_gold.svg",
			dark: "/assets/images/common/health_level.svg"
		},
		value: "OK"
	},
	link: "optimus-prime"
};

const Details = ({ transformer, edit }) => {
	return (
		<BackgroundImage type="shape" src={BackgroundShape}>
			<Group align="between" className={styles.root}>
				<div className={styles.image}>
					<Image
						title={transformer.name}
						src={transformer.skin.image.standard}
						className={styles["preview-1"]}
					/>
				</div>
				<div className={styles.info}>
					<div className={styles.logo}>
						<Image
							src={transformer.faction.image.gold}
							title={transformer.faction.name}
							className={styles["preview-2"]}
						/>
					</div>
					<Group align="between" className={styles.general}>
						<Group vertical>
							<Typography color="white" size="body-big" opacity="low">
								Name
							</Typography>
							<Typography color="white" size="body-big">
								{transformer.name}
							</Typography>
						</Group>
						<Group vertical>
							<Typography color="white" size="body-big" opacity="low">
								Faction
							</Typography>
							<Typography color="white" size="body-big">
								{transformer.faction.name}
							</Typography>
						</Group>
						<Group vertical>
							<Typography color="white" opacity="low" size="body-big">
								Status
							</Typography>
							<div style={{ marginLeft: "3rem", marginTop: "1.2rem" }}>
								<Image
									src={transformer.status.image.gold}
									title="Health level"
									type="preview-3"
								/>
							</div>
						</Group>
					</Group>
					<Group align="between" className={styles.vehicle_gear}>
						<div>
							<Typography color="white" opacity="low" size="body-big">
								Vehicle
							</Typography>
							<div style={{ textAlign: "center", marginTop: "6.2rem" }}>
								<Image
									src={transformer.vehicle.image.standard}
									title={transformer.vehicle.model}
									className={styles["preview-3"]}
								/>
							</div>
						</div>
						<div>
							<Typography color="white" opacity="low" size="body-big">
								Gear
							</Typography>
							<Group wrap={true} align="around" className={styles.gear}>
								{transformer.gear.map(gear => {
									return (
										<Image
											key={gear._id}
											src={gear.image.standard}
											title={gear.name}
											className={styles["preview-4"]}
										/>
									);
								})}
							</Group>
						</div>
					</Group>
				</div>
			</Group>
		</BackgroundImage>
	);
};

Details.propTypes = {
	transformer: PropTypes.shape({}),
	edit: PropTypes.bool
};

Details.defaultProps = {
	transformer,
	edit: false
};

export default Details;
