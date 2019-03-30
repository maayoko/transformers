/**
 * External deps
 */
import React from "react";

/**
 * Internal deps
 */
import Typography from "../../components/Typography/Typography";
import Image from "../../components/Image/Image";
import Group from "../../components/Group/Group";
import ListedImage from "../../components/ListedImage/ListedImage";
import { withGears } from "state/gears";

const Gear = ({ transformer, gears, addGear, removeGear }) => {
	const onGearClick = (gear, isSelected) => () => {
		if (isSelected) {
			removeGear(gear);
		} else {
			addGear(gear);
		}
	};

	return (
		<div style={{ maxWidth: "51rem" }}>
			<Typography size="body-big" color="white">
				Choose your favorite gear
			</Typography>
			<Group wrap align="between">
				{gears.map(gear => {
					const isSelected = transformer.gear.indexOf(gear) > -1;

					return (
						<ListedImage
							onClick={onGearClick(gear, isSelected)}
							selected={transformer.gear.indexOf(gear) > -1}
							key={gear._id}>
							<Image
								type="preview-6"
								src={gear.image.standard}
								title={gear.name}
								style={{ marginTop: "3.6rem" }}
							/>
						</ListedImage>
					);
				})}
			</Group>
		</div>
	);
};

export default withGears(Gear);
