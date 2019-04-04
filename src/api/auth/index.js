import { getInstance } from "core/common/auth/google";

const googleLogin = credentials => {
	const auth = getInstance(credentials);
	return auth.login();
};

const googleLogout = credentials => {
	const auth = getInstance(credentials);
	auth.logout();
};

export { googleLogin, googleLogout };
