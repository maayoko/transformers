import Base from "./Base";

class Transformer extends Base {
	constructor(name, vehicle, faction, gear = [], status, skin, link) {
		super();
		this.name = name;
		this.vehicle = vehicle;
		this.faction = faction;
		this.gear = gear;
		this.status = status;
		this.skin = skin;
		this.link = link;
	}
}

export default Transformer;
