import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import classNames from "classnames";

const Input = ({
	placeholder,
	border,
	size,
	bgColor,
	onChange,
	value,
	id,
	autoCompleted,
	...other
}) => {
	const classes = classNames(styles.root, styles[size], styles[bgColor], {
		[styles.border]: border
	});

	return (
		<input
			id={id}
			onChange={onChange}
			className={classes}
			type="text"
			placeholder={placeholder}
			value={value}
			autoComplete={autoCompleted ? "on" : "off"}
			{...other}
		/>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string,
	border: PropTypes.bool,
	size: PropTypes.oneOf(["normal", "large"]),
	bgColor: PropTypes.oneOf(["transparent", "dark"]),
	onChange: PropTypes.func,
	autoCompleted: PropTypes.bool,
	value: PropTypes.any,
	id: PropTypes.any
};

Input.defaultProps = {
	placeholder: "",
	border: true,
	size: "normal",
	bgColor: "transparent",
	onChange: () => {},
	value: "",
	id: "",
	autoCompleted: true
};

export default Input;
