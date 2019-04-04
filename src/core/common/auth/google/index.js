import { createGApiElement, appendGapiElement } from "./dom";

class Google {
	static instance = null;

	static getInstance = options => {
		const instance = Google.instance;
		if (instance === null) {
			new Google(options);
		}

		return instance;
	};

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
		clientId
	}) {
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
		this._elemId = "google-auth";
		this._apiUrl = apiUrl;
	}

	_insertGApiIntoDOM = (id, cb) => {
		if (d.getElementById(this.elemId)) {
			return;
		}

		let { js, fjs } = createGApiElement(id, this._apiUrl);
		appendGapiElement(js, fjs);
		js.onload = cb;
	};

	_onScriptLoad = () => {
		const params = this._googleOptions;

		if (this.options.responseType === "code") {
			params.access_type = "offline";
		}

		window.gapi.load("auth2", () => {
			if (!window.gapi.auth2.getAuthInstance()) {
				window.gapi.auth2
					.init(params)
					.then(() => (this.ready = true), err => (this.ready = false));
			}
		});
	};

	enable = () => {
		this._insertGApiIntoDOM(this.elem, this._onScriptLoad);
	};

	disable = () => {};
}

export default Google;
