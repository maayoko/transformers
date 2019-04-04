const d = document;
const s = "script";
const elemId = "google-auth";

const isRendered = elemId => {
	return d.getElementById(elemId) != null;
};

const createElement = (id, apiUrl) => {
	const element = d.getElementsByTagName(s)[0];
	const fjs = element;
	let js = element;
	js = d.createElement(s);
	js.id = id;
	js.src = apiUrl;

	return { js, fjs };
};

const appendElement = (js, fjs) => {
	if (fjs && fjs.parentNode) {
		fjs.parentNode.insertBefore(js, fjs);
	} else {
		d.head.appendChild(js);
	}

	return js;
};

const render = (apiUrl, cb) => {
	if (isRendered(elemId)) {
		return;
	}

	const { js, fjs } = createElement(elemId, apiUrl);
	const appendedJS = appendElement(js, fjs);
	appendedJS.onload = () => cb(window.gapi);
};

export { render };
