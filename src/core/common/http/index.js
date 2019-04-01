const fetch = window.fetch;

const httpMethods = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE"
};

const commonHeaders = {
	"Content-Type": "application/json"
};

const get = url => {
	return fetch(url, {
		method: httpMethods.GET,
		headers: { ...commonHeaders }
	});
};

const post = (url, data) => {
	return fetch(url, {
		method: httpMethods.POST,
		body: JSON.stringify(data),
		headers: { ...commonHeaders }
	});
};

const put = (url, data) => {
	return fetch(url, {
		method: httpMethods.PUT,
		body: JSON.stringify(data),
		headers: { ...commonHeaders }
	});
};

const _delete = (url, data) => {
	return fetch(url, {
		method: httpMethods.DELETE,
		body: JSON.stringify(data),
		headers: { ...commonHeaders }
	});
};

export default {
	get,
	post,
	put,
	delete: _delete
};
