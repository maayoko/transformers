const getGoogleUserDetails = response => {
	const res = response;
	const basicProfile = res.getBasicProfile();
	const name = basicProfile.getName();
	const email = basicProfile.getEmail();
	const firstName = basicProfile.getGivenName();
	const lastName = basicProfile.getFamilyName();
	const imageUrl = basicProfile.getImageUrl();

	return {
		name,
		email,
		firstName,
		lastName,
		imageUrl
	};
};

const getGoogleAuthDetails = response => {
	const res = response;
	const authResponse = res.getAuthResponse();
	const token = {
		id: authResponse.id_token,
		access: authResponse.access_token,
		expiresAt: authResponse.expires_at,
		expiresIn: authResponse.expires_in,
		type: authResponse.token_type
	};

	return { token, authenticated: true };
};

export { getGoogleUserDetails, getGoogleAuthDetails };
