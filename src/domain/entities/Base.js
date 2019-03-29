import { v4 } from "uuid";

class Base {
	constructor(image) {
		this.__id = v4();
		this._image = image;
	}

	get _id() {
		return this.__id;
	}

	get image() {
		return this._image;
	}

	set image(image) {
		this._image = image;
	}
}

export default Base;
