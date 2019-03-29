import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import classNames from "classnames";

const Input = ({ placeholder, border, size, bgColor, onChange }) => {
	const classes = classNames(styles.root, styles[size], styles[bgColor], {
		[styles.border]: border
	});
	return <input onChange={onChange} className={classes} type="text" placeholder={placeholder} />;
};

Input.propTypes = {
	placeholder: PropTypes.string,
	border: PropTypes.bool,
	size: PropTypes.oneOf(["normal", "large"]),
	bgColor: PropTypes.oneOf(["transparent", "dark"]),
	onChange: PropTypes.func
};

Input.defaultProps = {
	placeholder: "",
	border: true,
	size: "normal",
	bgColor: "transparent",
	onChange: () => {}
};

export default Input;
