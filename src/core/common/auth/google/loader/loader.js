import { loadScript } from "../dom";

const transformers = {
	google: {
		instance: null
	}
};
window.transformers = transformers;

const getInstance = options => {
	let instance = window.transformers.google.instance;
	if (instance == null) {
		instance = window.transformers.google.instance = Google.getInstance(options);
	}
	return instance;
};

class Loader {
	constructor({
		apiUrl = "https://apis.google.com/js/api.js",
		cookiePolicy = "single_host_origin",
		loginHint,
		hostedDomain,
		fetchBasicProfile = true,
		discoveryDocs,
		uxMode = "popup",
		redirectUri,
		scope = "profile email",
		accessType = "online",
		clientId,
		apiKey,
		prompt = "",
		responseType,
		services = "client:auth2",
		initService
	}) {
		if (clientId == null) {
			throw new Error("`CLIENT_ID` has to be provided.");
		}

		if (apiKey == null) {
			throw new Error("`API_KEY` has to be provided.");
		}

		this._googleOptions = {
			client_id: clientId,
			cookie_policy: cookiePolicy,
			login_hint: loginHint,
			hosted_domain: hostedDomain,
			fetch_basic_profile: fetchBasicProfile,
			discoveryDocs: discoveryDocs,
			ux_mode: uxMode,
			redirect_uri: redirectUri,
			scope: scope,
			access_type: accessType
		};
		this._apiUrl = apiUrl;
		this._apiKey = apiKey;
		this._prompt = prompt;
		this._responseType = responseType;
		this._services = services;
	}

	onScriptLoad = gapi => {
		this._gapi = gapi;
		const params = this._googleOptions;

		if (this._responseType === "code") {
			params.access_type = "offline";
		}

		gapi.load(this._services, () => {
			if (!gapi.auth2.getAuthInstance()) {
				// gapi.auth2
				// 	.init(params)
				// 	.then(() => (this.ready = true), err => (this.ready = false));
			}

			gapi.client
				.init({
					apiKey: this._apiKey,
					clientId: params.client_id,
					discoveryDocs: params.discoveryDocs,
					scope: params.scope
				})
				.then(() => (this.ready = true), err => (this.ready = false));
		});
	};

	_getAuthInstance = () => {
		return this._gapi.auth2.getAuthInstance();
	};

	load = () => {
		const { _apiUrl } = this;
		loadScript(_apiUrl, this.onScriptLoad);
	};

	unload = () => {};
}

export default Loader;
