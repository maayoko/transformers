import React, { useEffect } from "react";
import Login from "./Login";
import { withAuth as withAuthManager } from "../../components/Auth";
import { withAuth } from "state/auth";

export default withAuthManager(
	withAuth(({ authManager, auth, googleLogin, googleLogout }) => {
		console.log(auth);
		useEffect(() => {
			/* eslint-disable no-unused-expressions */
			authManager.enable();

			() => {
				authManager.disable();
			};
		}, [authManager]);

		return <Login login={googleLogin} />;
	})
);
