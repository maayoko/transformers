/**
 * External deps
 */
import React from "react";

/**
 * Internal deps
 */
import ButtonLink from "../components/ButtonLink/ButtonLink";
import styles from "./Home.module.scss";
import Typography from "../components/Typography/Typography";
import RobotPreview from "../components/RobotPreview/RobotPreview";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import Image from "../components/Image/Image";
import Group from "../components/Group/Group";

/**
 * Assets
 */
import AutobotLogo from "../../assets/images/svg/logo.svg";
import HealtLevel from "../../assets/images/svg/health_level.svg";
import BackgroundShape from "../../assets/images/bg_shape@1x.png";
import UnderlayGold from "../../assets/images/underlay-gold.png";

/**
 * Variables
 */
const basePath = "/assets/transformers-robots";
const transformers = [
	{
		imageSrc: `${basePath}/ironhide2.png`,
		name: "Ironhide",
		faction: "Decepticon"
	},
	{
		imageSrc: `${basePath}/megatron.png`,
		name: "Megatron",
		faction: "Decepticon"
	},
	{
		imageSrc: `${basePath}/bumblebee.png`,
		name: "Bumblebee",
		faction: "Autobot"
	}
];

const Home = () => {
	return (
		<BackgroundImage type="shape" src={BackgroundShape}>
			<div className={styles.root}>
				<main className={styles.main}>
					<BackgroundImage type="home-gold-bg" src={UnderlayGold}>
						<Image
							type="preview-1"
							title="Optimus-prime"
							src="assets/transformers-robots/optimus-prime.png"
						/>
						<ButtonLink
							className={styles.button_link}
							to="/transformers/optimus-prime/details">
							Check me out
						</ButtonLink>
						<div className={styles.info_wrapper}>
							<Group align="center" style={{ width: "10rem" }}>
								<Image type="preview-2" src={AutobotLogo} title="Autobot Logo" />
								<Typography
									uppercase
									size="header-big"
									color="black"
									opacity="high">
									Optimus Prime
								</Typography>
							</Group>
							<Group style={{ marginTop: "4rem" }}>
								<Group vertical align="center" style={{ marginRight: "7rem" }}>
									<Typography
										uppercase
										size="body-mid"
										color="black"
										opacity="mid">
										Status
									</Typography>
									<Image type="preview-3" src={HealtLevel} title="Health level" />
								</Group>
								<Group vertical align="center">
									<Typography
										uppercase
										size="body-mid"
										color="black"
										opacity="mid">
										Vehicle
									</Typography>
									<Image
										type="preview-4"
										src="assets/transformers-robots/megatron-car.png"
										title="Megatron car"
									/>
								</Group>
							</Group>
							<Group style={{ marginTop: "2.5rem" }}>
								<Group vertical>
									<Typography
										uppercase
										size="body-mid"
										color="black"
										opacity="mid">
										Gear
									</Typography>
									<Group>
										<Image
											type="preview-5"
											style={{ marginRight: "1.5rem" }}
											src="assets/weapons/canon.png"
											title="Canon"
										/>
										<Image
											type="preview-5"
											src="assets/weapons/shield.png"
											title="Shield"
										/>
									</Group>
								</Group>
							</Group>
						</div>
					</BackgroundImage>
				</main>
				<aside className={styles.sidebar}>
					<Typography size="body-big" color="white">
						Transformers at your disposal
					</Typography>
					<div className={styles.transformers_list}>
						{transformers.map((transformer, idx) => (
							<RobotPreview
								key={idx}
								imageSrc={transformer.imageSrc}
								name={transformer.name}
								faction={transformer.faction}
							/>
						))}
					</div>
				</aside>
			</div>
		</BackgroundImage>
	);
};

export default Home;
