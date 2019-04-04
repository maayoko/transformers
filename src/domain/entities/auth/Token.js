import Base from "../Base";

class Token extends Base {
	constructor(id, type, access, expiresAt, expiresIn) {
		super();
		this.id = id;
		this.type = type;
		this.access = access;
		this.expiresAt = expiresAt;
		this.expiresIn = expiresIn;
	}
}

export default Token;
