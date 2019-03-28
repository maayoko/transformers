import Base from "./Base";

class Status extends Base {
	constructor(value, image) {
		super();
		this._value = value;
		this._image = image;
	}

	get value() {
		return this._value;
	}

	get image() {
		return this._image;
	}
}

export default Status;
