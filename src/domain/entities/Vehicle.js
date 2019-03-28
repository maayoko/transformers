import Base from "./Base";

class Vehicle extends Base {
	constructor(group, type, model, image) {
		super();
		this._group = group;
		this._type = type;
		this._model = model;
		this._image = image;
	}

	get group() {
		return this._group;
	}

	get type() {
		return this._type;
	}

	get model() {
		return this._model;
	}

	get image() {
		return this._image;
	}
}

export default Vehicle;
