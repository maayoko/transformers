import React from "react";
import GoogleLogin from "react-google-login";
import PropTypes from "prop-types";

const Login = ({ login }) => {
	return (
		<div style={{ color: "white" }} onClick={login}>
			Log me in
		</div>
	);
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
