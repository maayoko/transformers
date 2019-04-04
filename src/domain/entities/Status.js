import BaseImage from "./BaseImage";

class Status extends BaseImage {
	constructor(value, image) {
		super(image);
		this.value = value;
	}
}

export default Status;
