import Base from "./Base";

class Transformer extends Base {
	constructor(name, vehicle, faction, gear = [], status, image, link) {
		super(image);
		this.name = name;
		this.vehicle = vehicle;
		this.faction = faction;
		this.gear = gear;
		this.status = status;
		this.link = link;
	}
}

export default Transformer;
