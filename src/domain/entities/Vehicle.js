import Base from "./Base";

class Vehicle extends Base {
	constructor(group, type, model, image) {
		super(image);
		this._group = group;
		this._type = type;
		this._model = model;
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
}

export default Vehicle;
