const fetch = window.fetch;

const httpMethods = {
	GET: "GET"
};

const get = url => {
	return fetch(url, {
		method: httpMethods.GET,
		headers: {
			"Content-Type": "application/json"
		}
	});
};

export default {
	get
};
