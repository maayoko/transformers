/**
 * External deps
 */
import React from "react";

/**
 * Internal deps
 */
import Typography from "../../../components/Typography/Typography";
import Image from "../../../components/Image/Image";
import Group from "../../../components/Group/Group";
import ListedImage from "../../../components/ListedImage/ListedImage";

const Skin = ({ transformer, updateSkin, skins }) => (
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

export default Skin;
