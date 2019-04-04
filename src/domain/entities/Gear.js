import BaseImage from "./BaseImage";

class Gear extends BaseImage {
	constructor(name, image) {
		super(image);
		this.name = name;
	}
}

export default Gear;
