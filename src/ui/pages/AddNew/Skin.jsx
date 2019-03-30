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
import { withSkins } from "state/skins";

/**
 * Variables
 */
const basePath = "/assets/transformers-robots";
const skins = [
	{ src: `${basePath}/bumblebee.png`, name: "Bumblebee" },
	{ src: `${basePath}/optimus-prime.png`, name: "Optimus Prime" },
	{ src: `${basePath}/megatron.png`, name: "Megatron" },
	{ src: `${basePath}/palpatine.png`, name: "Palpatine" },
	{ src: `${basePath}/shockwave.png`, name: "Shockwave" },
	{ src: `${basePath}/transformer-not-selected-gold.png`, name: "Shockwave" }
];

const Skin = ({ transformer, updateSkin, skins }) => {
	return (
		<div style={{ maxWidth: "51rem" }}>
			<Typography size="body-big" color="white">
				Choose your favorite skin
			</Typography>
			<Group align="between" wrap>
				{skins.map(skin => {
					return (
						<ListedImage
							onClick={() => updateSkin(skin)}
							key={skin._id}
							selected={transformer.skin._id === skin._id}>
							<Image
								key={skin._id}
								type="preview-6"
								src={skin.image.standard}
								title={skin.name}
								style={{ marginTop: "3.6rem" }}
							/>
						</ListedImage>
					);
				})}
			</Group>
		</div>
	);
};

export default withSkins(Skin);
