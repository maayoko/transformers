import React from "react";
import Typography from "../../components/Typography/Typography";
import Image from "../../components/Image/Image";

const basePath = "/assets/transformers-robots";
const skins = [
	{ src: `${basePath}/bumblebee.png`, name: "Bumblebee" },
	{ src: `${basePath}/optimus-prime.png`, name: "Optimus Prime" },
	{ src: `${basePath}/megatron.png`, name: "Megatron" },
	{ src: `${basePath}/palpatine.png`, name: "Palpatine" },
	{ src: `${basePath}/shockwave.png`, name: "Shockwave" },
	{ src: `${basePath}/transformer-not-selected-gold.png`, name: "Shockwave" }
];

const Skin = () => {
	return (
		<div style={{ maxWidth: "51rem" }}>
			<Typography size="body-big" color="white">
				Choose your favorite skin
			</Typography>
			<div
				style={{
					display: "flex",
					flexBasis: "51rem",
					flexWrap: "wrap",
					justifyContent: "space-between"
				}}>
				{skins.map((skin, idx) => {
					return (
						<Image
							key={idx}
							type="preview-6"
							src={skin.src}
							title={skin.name}
							style={{ marginTop: "3.6rem" }}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Skin;
