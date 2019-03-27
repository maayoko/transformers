import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Typography from "../../components/Typography/Typography";
import styles from "./AddNew.module.scss";
import General from "./General";
import Skin from "./Skin";
import Vehicle from "./Vehicle";
import Gear from "./Gear";
import Button from "../../components/Button/Button";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import BackgroundShape from "../../assets/images/bg_shape_dark@1x.png";

class AddNew extends React.Component {
	render() {
		return (
			<BackgroundImage src={BackgroundShape}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between"
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							flexBasis: "28rem"
						}}>
						<Link
							className={`${styles.link_nav} ${styles.active}`}
							to="/transformers/add/general">
							<Typography size="body-mid" uppercase color="primary">
								General
							</Typography>
						</Link>
						<Link className={`${styles.link_nav}`} to="/transformers/add/skin">
							<Typography size="body-mid" uppercase color="white">
								Skin
							</Typography>
						</Link>
						<Link className={`${styles.link_nav}`} to="/transformers/add/vehicle">
							<Typography size="body-mid" uppercase color="white">
								Vehicle
							</Typography>
						</Link>
						<Link className={`${styles.link_nav}`} to="/transformers/add/gear">
							<Typography size="body-mid" uppercase color="white">
								Gear
							</Typography>
						</Link>
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
							<span
								style={{
									backgroundImage: `url(/assets/transformers-robots/transformer-not-selected-gold.png)`,
									backgroundPosition: "center",
									backgroundSize: "contain",
									backgroundRepeat: "no-repeat",
									display: "block",
									width: "31rem",
									height: "34rem"
								}}
							/>
							<div
								style={{
									display: "flex",
									alignContent: "center",
									flexDirection: "column"
								}}>
								<div style={{ textAlign: "center" }}>
									<span
										style={{
											backgroundImage: `url(/assets/png/logo-not-selected-gold.png)`,
											backgroundPosition: "center",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
											display: "inline-block",
											width: "5rem",
											height: "5rem"
										}}
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
								<span
									style={{
										backgroundImage: `url(/assets/transformers-robots/transformer-car-not-selected-gold.png)`,
										backgroundPosition: "center",
										backgroundSize: "contain",
										backgroundRepeat: "no-repeat",
										display: "inline-block",
										width: "15.5rem",
										height: "15.5rem"
									}}
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
								<span
									style={{
										backgroundImage: `url(/assets/weapons/machine-gun.png)`,
										backgroundPosition: "center",
										backgroundSize: "contain",
										backgroundRepeat: "no-repeat",
										display: "inline-block",
										width: "15.5rem",
										height: "15.5rem"
									}}
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
