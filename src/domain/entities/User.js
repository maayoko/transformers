import BaseImage from "./BaseImage";

class User extends BaseImage {
	constructor(name, email, firstName, lastName, image) {
		super(image);
		this.name = name;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

export default User;
