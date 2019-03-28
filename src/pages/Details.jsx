import React from "react";
import styles from "./Details.module.scss";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import Typography from "../components/Typography/Typography";
import Image from "../components/Image/Image";
import BackgroundShape from "../assets/images/bg_shape_dark@1x.png";

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

class Details extends React.Component {
	state = {
		editMode: false
	};

	render() {
		return (
			<BackgroundImage type="shape" src={BackgroundShape}>
				<div className={styles.root}>
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
						<div className={styles.general}>
							<div>
								<Typography color="white" size="body-big" opacity="low">
									Name
								</Typography>
								<Typography color="white" size="body-big">
									Bumblebee
								</Typography>
							</div>
							<div>
								<Typography color="white" size="body-big" opacity="low">
									Faction
								</Typography>
								<Typography color="white" size="body-big">
									Autobots
								</Typography>
							</div>
							<div>
								<Typography color="white" opacity="low" size="body-big">
									Status
								</Typography>
								<div
									style={{
										textAlign: "center",
										marginTop: "1.2rem"
									}}>
									<Image
										src="/assets/svg/health_level_gold.svg"
										title="Health level"
										type="preview-3"
									/>
								</div>
							</div>
						</div>
						<div className={styles.vehicle_gear}>
							<div>
								<Typography color="white" opacity="low" size="body-big">
									Vehicle
								</Typography>
								<div
									style={{
										textAlign: "center",
										marginTop: "6.2rem"
									}}>
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
								<div
									style={{
										display: "flex",
										maxWidth: "37rem",
										flexWrap: "wrap",
										justifyContent: "space-around",
										marginTop: "2.6rem",
										height: "24.2rem",
										overflowY: "scroll"
									}}>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</BackgroundImage>
		);
	}
}

export default Details;
