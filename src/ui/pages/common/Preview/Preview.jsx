/**
 * External deps
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Internal deps
 */
import Typography from "../../../components/Typography/Typography";
import Button from "../../../components/Button/Button";
import Image from "../../../components/Image/Image";
import Group from "../../../components/Group/Group";

const Preview = ({ transformer, onCreate, styles }) => (
	<div className={styles.root}>
		<Group align="evenly">
			<Image
				src={transformer.skin.image.standard}
				title="Not selected transformer"
				className={styles["preview-1"]}
			/>
			<Group vertical style={{ width: "15rem" }}>
				<div style={{ marginLeft: "3rem" }}>
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
					<div style={{ marginLeft: "3rem", marginTop: "1.2rem" }}>
						<Image
							src={transformer.status.image.gold}
							title="Health level"
							type="preview-3"
						/>
					</div>
				</Group>
			</Group>
		</Group>
		<Group align="evenly" style={{ marginTop: "4.2rem" }}>
			<Group vertical style={{ maxWidth: "15.5rem" }}>
				<Typography color="white" opacity="low" size="body-big">
					Vehicle
				</Typography>
				<Image
					src={transformer.vehicle.image.standard}
					title={transformer.vehicle.name}
					className={styles["preview-3"]}
				/>
			</Group>
			<Group vertical style={{ maxWidth: "25rem", width: "100%" }}>
				<Typography color="white" opacity="low" size="body-big">
					Gear
				</Typography>
				<Group style={{ overflowX: "scroll" }}>
					{transformer.gear.map(gear => (
						<Image
							key={gear._id}
							src={gear.image.standard}
							title={gear.name}
							className={styles["preview-3"]}
						/>
					))}
				</Group>
			</Group>
		</Group>
		<div onClick={onCreate} style={{ textAlign: "center", width: "100%", marginTop: "3rem" }}>
			<Button>Create me</Button>
		</div>
	</div>
);

Preview.propTypes = {
	transformer: PropTypes.shape({}).isRequired,
	onCreate: PropTypes.func
};

Preview.defaultProps = {
	onCreate: () => {}
};

export default Preview;
