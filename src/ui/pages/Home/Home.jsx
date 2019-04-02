/**
 * External deps
 */
import React from "react";
import PropTypes from "prop-types";
import { stringify } from "query-string";

/**
 * Internal deps
 */
import ButtonLink from "ui/components/ButtonLink/ButtonLink";
import Typography from "ui/components/Typography/Typography";
import RobotPreview from "ui/components/RobotPreview/RobotPreview";
import BackgroundImage from "ui/components/BackgroundImage/BackgroundImage";
import Image from "ui/components/Image/Image";
import Group from "ui/components/Group/Group";

/**
 * Assets
 */
import BackgroundShape from "assets/images/bg_shape@1x.png";
import UnderlayGold from "assets/images/underlay-gold.png";

/**
 * Variables
 */
const basePath = "/assets/transformers-robots";
const transformers = [
	{
		skin: {
			image: { standard: `${basePath}/ironhide2.png` }
		},
		name: "Ironhide",
		faction: { name: "Decepticon" }
	},
	{
		skin: {
			image: { standard: `${basePath}/megatron.png` }
		},
		name: "Megatron",
		faction: { name: "Decepticon" }
	},
	{
		skin: {
			image: { standard: `${basePath}/bumblebee.png` }
		},
		name: "Bumblebee",
		faction: { name: "Autobot" }
	}
];

const Home = ({
	transformers,
	setCurrentTransformer,
	styles,
	selectActiveService,
	transformer
}) => (
	<BackgroundImage type="shape" src={BackgroundShape}>
		<div className={styles.root}>
			<main className={styles.main}>
				<BackgroundImage type="home-gold-bg" src={UnderlayGold}>
					{transformer ? (
						<>
							<Image
								type="preview-1"
								title={transformer.name}
								src={transformer.skin.image.standard}
							/>
							<div className={styles.info_wrapper}>
								<Group align="center" style={{ width: "10rem", height: "6.5rem" }}>
									<Image
										type="preview-2"
										src={transformer.faction.image.dark}
										title="Autobot Logo"
									/>
									<Typography
										uppercase
										size="header-big"
										color="black"
										opacity="high">
										{transformer.name}
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
										<Image
											type="preview-3"
											src={transformer.status.image.dark}
											title="Health level"
										/>
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
											src={transformer.vehicle.image.standard}
											title={transformer.vehicle.model}
										/>
									</Group>
								</Group>
								<Group style={{ marginTop: "1rem" }}>
									<Group vertical>
										<Typography
											uppercase
											size="body-mid"
											color="black"
											opacity="mid">
											Gear
										</Typography>
										<Group>
											{transformer.gear.map(_gear => (
												<Image
													key={_gear._id}
													type="preview-5"
													style={{ marginRight: "1.5rem" }}
													src={_gear.image.standard}
													title={_gear.name}
												/>
											))}
										</Group>
									</Group>
								</Group>
							</div>
							<ButtonLink
								onClick={() => {
									setCurrentTransformer(transformer);
								}}
								className={styles.button_link}
								to={{
									pathname: `/transformers/${transformer.link}/details`,
									search: `?${stringify({ edit: false, delete: false })}`,
									state: { currentTransformer: transformer }
								}}>
								Check me out
							</ButtonLink>
						</>
					) : (
						"Loading"
					)}
				</BackgroundImage>
			</main>
			<aside className={styles.sidebar}>
				<Typography size="body-big" color="white">
					Transformers at your disposal
				</Typography>
				<div className={styles.transformers_list}>
					{transformers.map((transformer, idx) => {
						const id = transformer._id || idx;
						return (
							<div onClick={() => selectActiveService.setActiveLinkIdx(id)} key={id}>
								<RobotPreview
									imageSrc={transformer.skin.image.standard}
									name={transformer.name}
									faction={transformer.faction.name}
								/>
							</div>
						);
					})}
				</div>
			</aside>
		</div>
	</BackgroundImage>
);

Home.propTypes = {
	transformers: PropTypes.arrayOf(PropTypes.shape({}))
};

Home.defaultProps = {
	transformers
};

export default Home;
