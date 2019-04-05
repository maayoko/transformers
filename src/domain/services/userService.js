import User from "../entities/User";
import Image from "../entities/Image";
import helpers from "core/common/helpers";

const createUser = user => {
	const name = user.name;
	const email = user.email;
	const firstName = user.firstName;
	const lastName = user.lastName;
	const link = helpers.replaceWithDash(name);
	const image = new Image(user.imageUrl);

	return new User(name, email, firstName, lastName, image, link);
};

export { createUser };
