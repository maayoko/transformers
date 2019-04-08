const notFoundCode = 404;
const notAuthorizedCode = 401;

const notFound = async request => {
	const response = await request;
	if (response.status === notFoundCode) {
		return Promise.reject("Resource not found");
	}

	return response;
};

const notAuthorized = async request => {
	const response = await request;
	if (response.status === notAuthorizedCode) {
		return Promise.reject("Not Authorized");
	}

	return response;
};

export { notFound, notAuthorized };
