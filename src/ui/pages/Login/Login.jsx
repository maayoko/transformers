import React from "react";
import GoogleLogin from "react-google-login";
import PropTypes from "prop-types";

const Login = ({ clientId, onSuccess, onFailure }) => {
	return (
		<GoogleLogin
			onFailure={onFailure}
			onSuccess={onSuccess}
			clientId={clientId}
			isSignedIn={true}
		/>
	);
};

Login.propTypes = {
	clientId: PropTypes.string.isRequired,
	onSuccess: PropTypes.func.isRequired,
	onFailure: PropTypes.func.isRequired
};

Login.defaultProps = {};

export default Login;
