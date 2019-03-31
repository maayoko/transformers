import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./BackgroundImage.module.scss";

const BackgroundImage = ({ src, style, type, children, className, ...other }) => {
	const classes = classNames(styles.root, styles[type], className);

	return (
		<span {...other} style={{ backgroundImage: `url(${src})`, ...style }} className={classes}>
			{children}
		</span>
	);
};

BackgroundImage.propTypes = {
	src: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["shape", "home-gold-bg", "preview-1", "icon"]).isRequired,
	style: PropTypes.shape({}),
	className: PropTypes.string
};

BackgroundImage.defaultProps = {
	style: {},
	className: ""
};

export default BackgroundImage;
