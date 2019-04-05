import ClientLoader from "./client";
import Auth2Loader from "./auth2";

const loaderTypes = {
	CLIENT: "CLIENT",
	AUTH2: "AUTH2"
};

const transformers = {
	google: {
		loader: null
	}
};

const getLoader = () => {
	if (!window.transformers) {
		throw new Error("Can't access loader instance before creating one");
	}

	return window.transformers.google.loader;
};

const setLoader = loader => {
	if (!window.transformers) {
		window.transformers = transformers;
		window.transformers.google.loader = loader;
	}
};

const createLoader = (type, options) => {
	let loaderInstance;

	switch (type) {
		case loaderTypes.CLIENT:
			loaderInstance = new ClientLoader(options);
			break;
		case loaderTypes.AUTH2:
			loaderInstance = new Auth2Loader(options);
			break;
	}

	if (loaderInstance == null) {
		throw new Error(`Provided type: '${type}' is not supported.`);
	}

	setLoader(loaderInstance);
	return loaderInstance;
};

export { createLoader, getLoader, loaderTypes };
