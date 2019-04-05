import React from "react";
import GoogleLogin from "react-google-login";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";

const Login = ({ login }) => {
	return (
		<>
			<Typography color="white">Sign in with Google account</Typography>
			<Button variant="primary" onClick={login}>
				Log me in
			</Button>
		</>
	);
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

/**

https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=ya29.GlviBg2lyW3DLRFejgvYmbteEvv4RjHGApyLbi0uQT7loZ-DcqhVlrLpkDSQ_6wvgh5ARNLTVDHlDj5G7zyvL7NKf_wZ2QKYrWaxMUSa2y7euVXZw6Ex21fpQ_HO

 */
