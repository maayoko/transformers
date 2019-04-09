import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import { withAuth } from "state/auth";
import { withUser } from "state/user";
import styles from "./Login.module.scss";

export default withUser(
	withAuth(({ user, googleLogin, auth }) => {
		return auth.authenticated ? (
			<Redirect to={`/users/${user.link}/home`} />
		) : (
			<Login styles={styles} login={googleLogin} />
		);
	})
);
