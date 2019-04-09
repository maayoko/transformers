import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = ({ children }) => {
	return (
		<div className={styles.root}>
			<Logo variant="link" color="primary" size="small" />
			{children}
		</div>
	);
};

export default Header;
