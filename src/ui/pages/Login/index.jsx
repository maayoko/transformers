import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import { withLoader } from "../../components/Loader";
import { withAuth } from "state/auth";
import { withUser } from "state/user";

export default withUser(
	withLoader(
		withAuth(({ user, loader, googleLogin, auth }) => {
			useEffect(() => {
				/* eslint-disable no-unused-expressions */
				loader.load();

				() => {
					loader.unload();
				};
			}, [loader]);

			return auth.authenticated ? (
				<Redirect to={`/users/${user.link}/home`} />
			) : (
				<Login login={googleLogin} />
			);
		})
	)
);
