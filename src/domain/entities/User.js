import BaseImage from "./BaseImage";

class User extends BaseImage {
	constructor(name, email, firstName, lastName, image, link) {
		super(image);
		this.name = name;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.link = link;
	}
}

export default User;
