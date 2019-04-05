import { getInstance } from "./loader";

class Auth {
	_loader = getInstance();

	constructor({ grantOfflineAccess = false }) {
		this._options = {
			grantOfflineAccess
		};
	}

	login = () => {
		if (this.ready) {
			const auth2 = this._getAuthInstance();
			const options = { prompt: this._prompt };

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
		this._loader.getAuthInstance().isSignedIn.get();
	};
}
export default Auth;
