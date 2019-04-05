import React, { useEffect } from "react";
import Login from "./Login";
import { withAuth as withAuthManager } from "../../components/Auth";
import { withAuth } from "state/auth";
import { parse } from "query-string";

export default withAuthManager(
	withAuth(({ authManager, auth, googleLogin, googleLogout, location }) => {
		console.log(auth, parse(location.hash));
		useEffect(() => {
			/* eslint-disable no-unused-expressions */
			authManager.load();

			() => {
				authManager.unload();
			};
		}, [authManager]);

		return <Login login={googleLogin} />;
	})
);
