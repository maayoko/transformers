import validate from "validate.js";
import helpers from "./helpers";

export default {
	email: validate.email,
	string: value => {
		if (helpers.isString(value) && helpers.isEmpty(value)) {
			return null;
		}
	}
};
