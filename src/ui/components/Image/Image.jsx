import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = ({ src, title, type, className, ...other }) => {
	const classes = classNames(styles.root, styles[type], className);

	return <img className={classes} src={src} alt={title} {...other} />;
};

Image.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string,
	type: PropTypes.oneOf([
		"preview-1",
		"preview-2",
		"preview-3",
		"preview-4",
		"preview-5",
		"preview-6"
	]),
	className: PropTypes.string
};

Image.defaultProps = {
	title: "",
	className: ""
};

export default Image;
