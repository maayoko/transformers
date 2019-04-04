import { v4 } from "uuid";

class Base {
	constructor() {
		this._id = v4();
	}
}

export default Base;
