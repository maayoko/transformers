import Base from "./Base";

class Faction extends Base {
	constructor(name, image) {
		super(image);
		this.name = name;
	}
}

export default Faction;
