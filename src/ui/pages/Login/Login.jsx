import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import Group from "../../components/Group/Group";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import GoogleLogoSrc from "assets/images/svg/google_icon.svg";

const Login = ({ login, styles }) => {
	return (
		<Group className={styles.root}>
			<Group vertical className={styles.login_wrapper} align="center">
				<Typography color="white" uppercase size="header-mid" as="h3">
					ARE YOU READY TO JOIN AN EXCITING WORLD OF TRANSFORMERS?
				</Typography>
				<Typography color="white" size="header-mid" as="h4">
					If <span style={{ fontFamily: "Transformers, Arial, sans-serif" }}>YES</span>{" "}
					click on the button bellow and we'll see you on the other side.
				</Typography>
				<Button variant="primary" onClick={login}>
					<BackgroundImage type="icon" src={GoogleLogoSrc} />
					Login
				</Button>
				<Typography color="white" size="body-small" as="p">
					* Please note we'll need an access to your personal information and your
					calendar events.
				</Typography>
			</Group>
		</Group>
	);
};

Login.propTypes = {
	styles: PropTypes.shape({})
};

Login.defaultProps = {
	styles: {}
};

export default Login;

/**

https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=ya29.GlviBg2lyW3DLRFejgvYmbteEvv4RjHGApyLbi0uQT7loZ-DcqhVlrLpkDSQ_6wvgh5ARNLTVDHlDj5G7zyvL7NKf_wZ2QKYrWaxMUSa2y7euVXZw6Ex21fpQ_HO

 */
