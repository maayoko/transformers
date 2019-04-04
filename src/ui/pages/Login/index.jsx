import React, { useEffect } from "react";
import Login from "./Login";
import { withGlobal } from "state/global";
const elementsInsertedIntoDOM = false;

export default withGlobal(({ global }) => {
	// useEffect(() => {
	// 	if (!elementsInsertedIntoDOM) {
	// 		const script = document.createElement("script");
	// 		script.src = "https://apis.google.com/js/platform.js";
	// 		script.async = true;
	// 		script.defer = true;

	// 		const meta = document.createElement("meta");
	// 		meta.name = "google-signin-client_id";
	// 		meta.content =
	// 			"616541988612-pl2rsjntpop90jsgb88afe1ltdn09dgr.apps.googleusercontent.com";

	// 		document.head.appendChild(meta);
	// 		document.body.appendChild(script);
	// 	}
	// });

	// const onSignIn = googleUser => {
	// 	var profile = googleUser.getBasicProfile();
	// 	console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
	// 	console.log("Name: " + profile.getName());
	// 	console.log("Image URL: " + profile.getImageUrl());
	// 	console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
	// };

	// const signOut = () => {
	// 	/* eslint-disable no-undef */
	// 	var auth2 = gapi.auth2.getAuthInstance();
	// 	auth2.signOut().then(function() {
	// 		console.log("User signed out.");
	// 	});
	// };

	const onSuccess = response => {
		const { accessToken, tokenId, profileObj } = response;
		console.log(response);
	};

	const onFailure = response => {
		console.log(response);
	};

	return (
		<Login
			onFailure={onFailure}
			onSuccess={onSuccess}
			clientId={global.credentials.CLIENT_ID}
		/>
	);
});

// curl \
//   'https://www.googleapis.com/calendar/v3/users/me/calendarList' \
//   --header 'Authorization: Bearer ya29.GlvgBm5I6Zlu7srTHC1TQX_3dQbFR4XjX3FE-O4PEmfN1fodij7_yLfzX114tXdqXnBNVxAAJUAlIn94Af494MA6iSPcfUZJvnz0PpG-GcdJ9cB7pJWGHMGWP4-i' \
//   --header 'Accept: application/json' \
//   --compressed
