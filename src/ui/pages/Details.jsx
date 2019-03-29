/**
 * External deps
 */
import React from "react";

/**
 * Internal deps
 */
import styles from "./Details.module.scss";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import Typography from "../components/Typography/Typography";
import Image from "../components/Image/Image";
import Group from "../components/Group/Group";

/**
 * Assets
 */
import BackgroundShape from "../../assets/images/bg_shape_dark@1x.png";

/**
 * Variables
 */
const basePath = "/assets/weapons";
const gears = [
	{ src: `${basePath}/canon.png`, name: "Canon" },
	{ src: `${basePath}/concept2.png`, name: "Concept" },
	{ src: `${basePath}/machine-gun.png`, name: "Machine gun" },
	{ src: `${basePath}/rifle.png`, name: "Rifle" }
	// { src: `${basePath}/shield.png`, name: "Shield" },
	// { src: `${basePath}/weapon-not-selected-gold.png`, name: "Shockwave" }
];
const transformer = {
	name: "Bumblebee",
	faction: { id: 0, name: "Autobot" },
	status: { id: 0, value: "OK" },
	vehicle: {
		group: "Land",
		type: "Car",
		model: "Camaro",
		imageSrc: "bumblebee-car.png"
	},
	gear: [{ id: 0, name: "Sword", imageSrc: "sword.png" }]
};

const Details = () => {
	// state = {
	// 	editMode: false
	// };
	return (
		<BackgroundImage type="shape" src={BackgroundShape}>
			<Group align="between" className={styles.root}>
				<div className={styles.image}>
					<Image
						src="/assets/transformers-robots/bumblebee.png"
						title="Bumblebee"
						className={styles["preview-1"]}
					/>
				</div>
				<div className={styles.info}>
					<div className={styles.logo}>
						<Image
							src="/assets/svg/autobots-logo-gold.svg"
							title="Autobots logo"
							className={styles["preview-2"]}
						/>
					</div>
					<Group align="between" className={styles.general}>
						<Group vertical>
							<Typography color="white" size="body-big" opacity="low">
								Name
							</Typography>
							<Typography color="white" size="body-big">
								Bumblebee
							</Typography>
						</Group>
						<Group vertical>
							<Typography color="white" size="body-big" opacity="low">
								Faction
							</Typography>
							<Typography color="white" size="body-big">
								Autobots
							</Typography>
						</Group>
						<Group vertical>
							<Typography color="white" opacity="low" size="body-big">
								Status
							</Typography>
							<div style={{ marginLeft: "3rem", marginTop: "1.2rem" }}>
								<Image
									src="/assets/svg/health_level_gold.svg"
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
									src="/assets/transformers-robots/bumblebee-car.png"
									title="Bumblebee car"
									className={styles["preview-3"]}
								/>
							</div>
						</div>
						<div>
							<Typography color="white" opacity="low" size="body-big">
								Gear
							</Typography>
							<Group wrap={true} align="around" className={styles.gear}>
								{gears.map((gear, idx) => {
									return (
										<Image
											key={idx}
											src={gear.src}
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

export default Details;
