import Gear from "../entities/Gear";
import Image from "../entities/Image";

const createGears = state => {
	const paths = state.global.paths;
	const gearsImage = state.global.images.gears.list;

	return gearsImage.map(gearImage => {
		const imageName = gearImage.type;
		const standardImageSrc = `${paths.gears}/${gearImage.image}`;
		return new Gear(imageName, new Image(standardImageSrc, standardImageSrc, standardImageSrc));
	});
};

export { createGears };
