import Base from "./Base";

class Transformer extends Base {
	constructor(name, vehicle, faction, gear = [], status, image) {
		super();
		this._name = name;
		this._vehicle = vehicle;
		this._faction = faction;
		this._gear = gear;
		this._status = status;
		this._image = image;
	}

	get name() {
		return this._name;
	}

	get vehicle() {
		return this._vehicle;
	}

	get faction() {
		return this._faction;
	}

	get gear() {
		return this._gear;
	}

	get status() {
		return this._status;
	}

	get image() {
		return this._image;
	}

	set name(name) {
		this._name = name;
	}

	set vehicle(vehicle) {
		this._vehicle = vehicle;
	}

	set faction(faction) {
		this._faction = faction;
	}

	addGear = gear => {
		return this._gear.push(gear);
	};

	removeGear = gear => {
		this._gear = this._gear.filter(_gear => _gear !== gear);
	};
}

export default Transformer;
