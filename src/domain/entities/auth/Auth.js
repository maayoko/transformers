import Base from "../Base";

class Auth extends Base {
	constructor(authenticated, token, userId) {
		super();
		this.authenticated = authenticated;
		this.token = token;
		this.userId = userId;
	}
}

export default Auth;
