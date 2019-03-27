import React from "react";
import styles from "./Details.module.scss";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import BackgroundShape from "../assets/images/bg_shape_dark@1x.png";
import Typography from "../components/Typography/Typography";

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
			<BackgroundImage src={BackgroundShape}>
				<div className={styles.root}>
					<div className={styles.image}>
						<span
							style={{
								marginTop: "7rem",
								backgroundImage: `url("/assets/transformers-robots/bumblebee.png")`,
								backgroundPosition: "center",
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								display: "block",
								width: "53rem",
								height: "58rem"
							}}
						/>
					</div>
					<div className={styles.info}>
						<div className={styles.logo}>
							<span
								style={{
									marginTop: "1rem",
									backgroundImage: `url("/assets/svg/autobots-logo-gold.svg")`,
									backgroundPosition: "center",
									backgroundSize: "contain",
									backgroundRepeat: "no-repeat",
									display: "inline-block",
									width: "10rem",
									height: "10rem"
								}}
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
									<span
										style={{
											backgroundImage: `url(/assets/svg/health_level_gold.svg)`,
											backgroundPosition: "center",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
											display: "inline-block",
											width: "5.2rem",
											height: "6.6rem"
										}}
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
									<span
										style={{
											backgroundImage: `url(/assets/transformers-robots/bumblebee-car.png)`,
											backgroundPosition: "center",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
											display: "inline-block",
											width: "29rem",
											height: "17rem"
										}}
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
									{gears.map((skin, idx) => {
										return (
											<span
												key={idx}
												style={{
													marginTop: "3.6rem",
													backgroundImage: `url(${skin.src})`,
													backgroundPosition: "center",
													backgroundSize: "contain",
													backgroundRepeat: "no-repeat",
													display: "block",
													width: "14rem",
													height: "8.5rem"
												}}
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
