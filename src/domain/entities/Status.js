import Base from "./Base";

class Status extends Base {
	constructor(value, image) {
		super(image);
		this._value = value;
	}

	get value() {
		return this._value;
	}
}

export default Status;
