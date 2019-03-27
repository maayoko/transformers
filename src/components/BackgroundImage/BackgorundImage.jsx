import React from "react";
import PropTypes from "prop-types";
import styles from "./BackgroundImage.module.scss";

const BackgroundImage = ({
    children,
    src,
    style
}) => {

    return (
        <span 
            style={{ backgroundImage: src, ...style }} 
            className={styles.root}>
            {children}
        </span>
    );
}

BackgroundImage.propTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.shape({})
};

BackgroundImage.defaultProps = {
    style: {}
}

export default BackgroundImage;