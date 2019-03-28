import { v4 } from "uuid";

class Base {
	constructor() {
		this._id = v4();
	}

	get id() {
		return this._id;
	}
}

export default Base;
