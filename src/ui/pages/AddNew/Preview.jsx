/**
 * External deps
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Internal deps
 */
import Typography from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import Group from "../../components/Group/Group";
import styles from "./Preview.module.scss";

const Preview = ({ transformer, onCreate }) => {
	return (
		<div className={styles.root}>
			<Group>
				<Image
					src={transformer.image.standard}
					title="Not selected transformer"
					className={styles["preview-1"]}
				/>
				<Group vertical>
					<div style={{ textAlign: "center" }}>
						<Image
							src={transformer.faction.image.gold}
							title="Not selected logo"
							className={styles["preview-2"]}
						/>
					</div>
					<Group vertical style={{ marginTop: "2.2rem" }}>
						<Typography color="white" opacity="low" size="body-big">
							Name
						</Typography>
						<Typography color="white" size="body-big">
							{transformer.name}
						</Typography>
					</Group>
					<Group vertical style={{ marginTop: "2.2rem" }}>
						<Typography color="white" opacity="low" size="body-big">
							Faction
						</Typography>
						<Typography color="white" size="body-big">
							{transformer.faction.name}
						</Typography>
					</Group>
					<Group vertical style={{ marginTop: "2.2rem" }}>
						<Typography color="white" opacity="low" size="body-big">
							Status
						</Typography>
						<div style={{ textAlign: "center", marginTop: "1.2rem" }}>
							<Image
								src={transformer.status.image.gold}
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
						src={transformer.vehicle.image.standard}
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
			<div
				onClick={onCreate}
				style={{ textAlign: "center", width: "100%", marginTop: "3rem" }}>
				<Button>Create me</Button>
			</div>
		</div>
	);
};

Preview.propTypes = {
	transformer: PropTypes.shape({}).isRequired,
	onCreate: PropTypes.func
};

Preview.defaultProps = {
	onCreate: () => {}
};

export default Preview;
