const notFoundCode = 404;

const notFound = async request => {
	const response = await request;
	if (response.status === notFoundCode) {
		return Promise.reject("Resource not found");
	}

	return response;
};

export { notFound };
