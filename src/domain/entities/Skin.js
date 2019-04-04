import BaseImage from "./BaseImage";

class Skin extends BaseImage {
	constructor(name, image) {
		super(image);
		this.name = name;
	}
}

export default Skin;
