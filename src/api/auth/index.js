import { getInstance } from "core/common/auth/google/auth";

const googleLogin = () => {
	const auth = getInstance();
	return auth.login();
};

const googleLogout = () => {
	const auth = getInstance();
	return auth.logout();
};

export { googleLogin, googleLogout };
