const d = document;
const s = "script";

const createGApiElement = (id, apiUrl) => {
	const element = d.getElementsByTagName(s)[0];
	const fjs = element;
	let js = element;
	js = d.createElement(s);
	js.id = id;
	js.src = apiUrl;

	return { js, fjs };
};

const appendGapiElement = (js, fjs) => {
	if (fjs && fjs.parentNode) {
		fjs.parentNode.insertBefore(js, fjs);
	} else {
		d.head.appendChild(js);
	}
};

export { createGApiElement, appendGapiElement };
