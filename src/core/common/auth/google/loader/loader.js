import { loadScript } from "./dom";

class Loader {
	constructor(apiUrl) {
		this._apiUrl = apiUrl;
		this.ready = false;
	}

	load = () => {
		const { _apiUrl } = this;
		loadScript(_apiUrl, this.onScriptLoad);
	};

	unload = () => {};
}

export default Loader;
