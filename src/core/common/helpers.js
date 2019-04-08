import helpers from "validate.js";

export default {
	isEmpty: helpers.isEmpty,
	isString: helpers.isString,
	replaceWithDash: value => value.replace(/\s/g, "-").toLowerCase(),
	isFunction: helpers.isFunction,
	isObject: helpers.isObject
};
