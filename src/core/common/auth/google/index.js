import { render } from "./dom";

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

class Google {
	static getInstance = options => {
		let instance = transformers.google.instance;

		if (instance === null) {
			transformers.google.instance = instance = new Google(options);
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
		clientId,
		prompt = "",
		responseType
	}) {
		if (clientId == null) {
			throw new Error("`CLIENT_ID` has to be provided.");
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
		this._prompt = prompt;
		this._responseType = responseType;
	}

	_onScriptLoad = gapi => {
		this._gapi = gapi;
		const params = this._googleOptions;

		if (this._responseType === "code") {
			params.access_type = "offline";
		}

		this._gapi.load("client:auth2", () => {
			if (!this._gapi.auth2.getAuthInstance()) {
				this._gapi.auth2
					.init(params)
					.then(() => (this.ready = true), err => (this.ready = false));
			}
		});
	};

	_getAuthInstance = () => {
		return this._gapi.auth2.getAuthInstance();
	};

	enable = () => {
		const { _apiUrl } = this;
		render(_apiUrl, this._onScriptLoad);
	};

	disable = () => {};

	login = () => {
		if (this.ready) {
			const auth2 = this._getAuthInstance();
			const options = { prompt: this._prompt };

			if (this._responseType === "code") {
				return auth2.grantOfflineAccess(options);
			} else {
				return auth2.signIn(options);
			}
		}

		return Promise.reject("Google auth not ready yet.");
	};
}

export { getInstance };
export default Google;

/*
curl \
  'https://www.googleapis.com/calendar/v3/users/me/calendarList' \
  --header 'Authorization: Bearer ya29.GlviBg2lyW3DLRFejgvYmbteEvv4RjHGApyLbi0uQT7loZ-DcqhVlrLpkDSQ_6wvgh5ARNLTVDHlDj5G7zyvL7NKf_wZ2QKYrWaxMUSa2y7euVXZw6Ex21fpQ_HO' \
  --header 'Accept: application/json' \
  --compressed

  https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http%3A%2F%2Foauth2.example.com%2Fcallback&response_type=token&client_id=616541988612-pl2rsjntpop90jsgb88afe1ltdn09dgr.apps.googleusercontent.com
  */
