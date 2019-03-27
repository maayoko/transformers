import React from "react";
import Typography from "../../components/Typography/Typography";
import Image from "../../components/Image/Image";

const basePath = "/assets/weapons";
const gears = [
	{ src: `${basePath}/canon.png`, name: "Canon" },
	{ src: `${basePath}/concept2.png`, name: "Concept" },
	{ src: `${basePath}/machine-gun.png`, name: "Machine gun" },
	{ src: `${basePath}/rifle.png`, name: "Rifle" },
	{ src: `${basePath}/shield.png`, name: "Shield" },
	{ src: `${basePath}/weapon-not-selected-gold.png`, name: "Shockwave" }
];

class Gear extends React.Component {
	render() {
		return (
			<div style={{ maxWidth: "51rem" }}>
				<Typography size="body-big" color="white">
					Choose your favorite gear
				</Typography>
				<div
					style={{
						display: "flex",
						flexBasis: "51rem",
						flexWrap: "wrap",
						justifyContent: "space-between"
					}}>
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
				</div>
			</div>
		);
	}
}

export default Gear;
