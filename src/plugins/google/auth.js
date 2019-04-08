import { getLoader } from "./loader";

class Auth {
	_loader = getLoader();

	constructor({ grantOfflineAccess = false, prompt = "" }) {
		this._options = {
			grantOfflineAccess,
			prompt
		};
	}

	getAuthInstance = () => {
		return this._loader.gapi.auth2.getAuthInstance();
	};

	login = () => {
		if (this._loader.ready) {
			const auth2 = this.getAuthInstance();
			const options = { prompt: this._options.prompt };

			if (this._options.grantOfflineAccess) {
				return auth2.grantOfflineAccess(options);
			} else {
				return auth2.signIn(options);
			}
		}

		return Promise.reject("Google auth not ready yet.");
	};

	logout = () => {
		const auth2 = this._getAuthInstance();
		if (auth2 != null) {
			return auth2.signOut().then(auth2.disconnect());
		}
	};

	isLoggedIn = () => {
		this._getAuthInstance().isSignedIn.get();
	};
}

const getInstance = (options = {}) => {
	return new Auth(options);
};

export { getInstance };
export default Auth;
