import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.root}>
            <Logo variant="link" color="primary" size="small" />
        </div>
    );
}

export default Header;