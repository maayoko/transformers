import Loader from "./loader";

class ClientLoader extends Loader {
	constructor({
		apiUrl = "https://apis.google.com/js/api.js",
		discoveryDocs,
		scope = "profile email",
		clientId,
		apiKey,
		services = "client:auth2"
	}) {
		if (clientId == null) {
			throw new Error("`CLIENT_ID` has to be provided.");
		}

		if (apiKey == null) {
			throw new Error("`API_KEY` has to be provided.");
		}
		super(apiUrl);

		this._googleOptions = {
			apiKey,
			clientId,
			discoveryDocs,
			scope
		};
		this._services = services;
	}

	onScriptLoad = gapi => {
		this.gapi = gapi;
		const params = this._googleOptions;

		gapi.load(this._services, () => {
			gapi.client.init(params).then(() => (this.ready = true), err => (this.ready = false));
		});
	};
}

export default ClientLoader;
