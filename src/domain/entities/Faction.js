import BaseImage from "./BaseImage";

class Faction extends BaseImage {
	constructor(name, image) {
		super(image);
		this.name = name;
	}
}

export default Faction;
