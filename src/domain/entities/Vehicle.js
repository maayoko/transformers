import Base from "./Base";

class Vehicle extends Base {
	constructor(group, type, model, image) {
		super(image);
		this.group = group;
		this.type = type;
		this.model = model;
	}
}

export default Vehicle;
