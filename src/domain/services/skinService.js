import Skin from "../entities/Skin";
import Image from "../entities/Image";

const createSkins = state => {
	const paths = state.global.paths;
	const skinsImagePaths = state.global.images.skins.list;

	return skinsImagePaths.map(skinImagePath => {
		const imageName = skinImagePath.split(".")[0];
		const standardImageSrc = `${paths.skins}/${skinImagePath}`;
		return new Skin(imageName, new Image(standardImageSrc, standardImageSrc, standardImageSrc));
	});
};

export { createSkins };
