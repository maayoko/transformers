import Base from "./Base";

class Faction extends Base {
	constructor(name, image) {
		super(image);
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

export default Faction;