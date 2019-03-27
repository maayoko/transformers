import React from "react";
import { Route, Redirect } from "react-router-dom";
import Typography from "../../components/Typography/Typography";
import styles from "./AddNew.module.scss";
import General from "./General";
import Skin from "./Skin";
import Vehicle from "./Vehicle";
import Gear from "./Gear";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import BackgroundShape from "../../assets/images/bg_shape_dark@1x.png";
import SidebarLinks from "../../components/SidebarLinks/SidebarLinks";

const basePath = "/transformers/add";
const links = [
	{ to: `${basePath}/general`, label: "General" },
	{ to: `${basePath}/skin`, label: "Skin" },
	{ to: `${basePath}/vehicle`, label: "Vehicle" },
	{ to: `${basePath}/gear`, label: "Gear" }
];

class AddNew extends React.Component {
	render() {
		console.log(styles);
		return (
			<BackgroundImage type="shape" src={BackgroundShape}>
				<div
					className={styles.root}
					style={{
						display: "flex",
						justifyContent: "space-between"
					}}>
					<div
						style={{
							flexBasis: "28rem"
						}}>
						<SidebarLinks links={links} />
					</div>
					<div style={{ flexBasis: "" }}>
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
						<div style={{ display: "flex" }}>
							<Image
								src="/assets/transformers-robots/transformer-not-selected-gold.png"
								title="Not selected transformer"
								className={styles["preview-1"]}
							/>
							<div
								style={{
									display: "flex",
									alignContent: "center",
									flexDirection: "column"
								}}>
								<div style={{ textAlign: "center" }}>
									<Image
										src="/assets/png/logo-not-selected-gold.png"
										title="Not selected logo"
										className={styles["preview-2"]}
									/>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginTop: "2.2rem"
									}}>
									<Typography color="white" opacity="low" size="body-big">
										Name
									</Typography>
									<Typography color="white" size="body-big">
										Bumblebee
									</Typography>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginTop: "2.2rem"
									}}>
									<Typography color="white" opacity="low" size="body-big">
										Faction
									</Typography>
									<Typography color="white" size="body-big">
										Autobots
									</Typography>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										marginTop: "2.2rem"
									}}>
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
						</div>
						<div
							style={{
								display: "flex",
								marginTop: "4.2rem",
								justifyContent: "space-between"
							}}>
							<div
								style={{
									display: "flex",
									flexDirection: "column"
								}}>
								<Typography color="white" opacity="low" size="body-big">
									Vehicle
								</Typography>
								<Image
									src="/assets/transformers-robots/transformer-car-not-selected-gold.png"
									title="Not selected car"
									className={styles["preview-3"]}
								/>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column"
								}}>
								<Typography color="white" opacity="low" size="body-big">
									Gear
								</Typography>
								<Image
									src="/assets/weapons/weapon-not-selected-gold.png"
									title="Not selected weapon"
									className={styles["preview-3"]}
								/>
							</div>
						</div>
						<div
							style={{
								textAlign: "center",
								width: "100%",
								marginTop: "3rem"
							}}>
							<Button>Create me</Button>
						</div>
					</div>
				</div>
			</BackgroundImage>
		);
	}
}

export default AddNew;
