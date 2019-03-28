import Base from "./Base";

class Faction extends Base {
	constructor(name) {
		super();
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

export default Faction;
