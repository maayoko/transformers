import { getInstance } from "plugins/google/auth";

const googleLogin = () => {
	const auth = getInstance();
	return auth.login();
};

const googleLogout = () => {
	const auth = getInstance();
	return auth.logout();
};

export { googleLogin, googleLogout };

/*

curl \
  'https://www.googleapis.com/calendar/v3/users/me/calendarList' \
  --header 'Authorization: Bearer ya29.GlviBkavqxWmgC37tZ4Z3fjgwFaVQKWi-By-2rTPEC7jNyud2rWDlvOpYeuCTULhanAmeurFf29qM89dRZoxm2dx0ONGLIJ_k73ZQIoeyeHfu6vY90kskQuDLZA4' \
  --header 'Accept: application/json' \
  --compressed

*/
