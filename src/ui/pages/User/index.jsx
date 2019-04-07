import React from "react";
import { withUser } from "state/user";
import User from "./User";
import styles from "./User.module.scss";

export default withUser(({ user }) => {
	const sidebarLinks = [
		{ to: `/users/${user.link}/home`, label: "Home" },
		{ to: `/users/${user.link}/events`, label: "Events" },
		{ to: `/users/${user.link}/settings`, label: "Settings" },
		{ to: `/users/${user.link}/profile`, label: "Profile" }
	];
	return <User styles={styles} user={user} sidebarLinks={sidebarLinks} />;
});
