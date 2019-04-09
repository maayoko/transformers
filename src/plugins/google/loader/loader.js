import { loadScript } from "./dom";

class Loader {
	constructor(apiUrl) {
		this._apiUrl = apiUrl;
		this.ready = false;
	}

	load = cb => {
		const { _apiUrl } = this;
		loadScript(_apiUrl, gapi => {
			this.onScriptLoad(gapi, cb);
		});
	};

	unload = () => {};
}

export default Loader;
