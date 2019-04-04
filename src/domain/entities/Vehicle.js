import BaseImage from "./BaseImage";

class Vehicle extends BaseImage {
	constructor(group, type, model, image) {
		super(image);
		this.group = group;
		this.type = type;
		this.model = model;
	}
}

export default Vehicle;
