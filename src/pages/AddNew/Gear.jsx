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

/**
 * Variables
 */
const basePath = "/assets/weapons";
const gears = [
	{ src: `${basePath}/canon.png`, name: "Canon" },
	{ src: `${basePath}/concept2.png`, name: "Concept" },
	{ src: `${basePath}/machine-gun.png`, name: "Machine gun" },
	{ src: `${basePath}/rifle.png`, name: "Rifle" },
	{ src: `${basePath}/shield.png`, name: "Shield" },
	{ src: `${basePath}/weapon-not-selected-gold.png`, name: "Shockwave" }
];

const Gear = () => {
	return (
		<div style={{ maxWidth: "51rem" }}>
			<Typography size="body-big" color="white">
				Choose your favorite gear
			</Typography>
			<Group wrap align="between">
				{gears.map((gear, idx) => {
					return (
						<Image
							key={idx}
							type="preview-6"
							src={gear.src}
							title={gear.name}
							style={{ marginTop: "3.6rem" }}
						/>
					);
				})}
			</Group>
		</div>
	);
};

export default Gear;
