import Loader from "./loader";

class Auth2Loader extends Loader {
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
		prompt = "",
		responseType,
		services = "auth2"
	}) {
		if (clientId == null) {
			throw new Error("`CLIENT_ID` has to be provided.");
		}
		super(apiUrl);

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
		this._prompt = prompt;
		this._responseType = responseType;
		this._services = services;
	}

	onScriptLoad = (gapi, cb) => {
		this._gapi = gapi;
		const params = this._googleOptions;

		if (this._responseType === "code") {
			params.access_type = "offline";
		}

		gapi.load(this._services, () => {
			if (!gapi.auth2.getAuthInstance()) {
				gapi.auth2.init(params).then(
					() => {
						this.ready = true;
						cb();
					},
					err => (this.ready = false)
				);
			}
		});
	};
}

export default Auth2Loader;
