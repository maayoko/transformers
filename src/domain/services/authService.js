import Auth from "../entities/auth/Auth";
import Token from "../entities/auth/Token";

const createAuth = (state, auth) => {
	const { token } = auth;
	const _token = new Token(token.id, token.type, token.access, token.expiresAt, token.expiresIn);
	const authenticated = auth.authenticated;
	const userId = state.user._id;

	return new Auth(authenticated, _token, userId);
};

export { createAuth };
