import Base from "./Base";

class Gear extends Base {
	constructor(name, image) {
		super(image);
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

export default Gear;
