import { v4 } from "uuid";

class Base {
	constructor(image) {
		this._id = v4();
		this.image = image;
	}
}

export default Base;
