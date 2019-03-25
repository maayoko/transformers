import React from "react";
import PropTypes from "prop-types";
import styles from "./Background.module.scss";

const Background = ({
    children
}) => {
    return (
        <div className={styles.root}>{children}</div>
    );
}

Background.propTypes = {

}

Background.defaultProps = {

}

export default Background;