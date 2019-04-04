import User from "../entities/User";
import Image from "../entities/Image";

const createUser = user => {
	const name = user.name;
	const email = user.email;
	const firstName = user.firstName;
	const lastName = user.lastName;
	const image = new Image(user.imageUrl);

	return new User(name, email, firstName, lastName, image);
};

export { createUser };
