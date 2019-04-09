import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./FormGroup.module.scss";

const FormGroup = ({ children, className }) => {
	const classes = classNames(styles.root, className);

	return <div className={classes}>{children}</div>;
};

FormGroup.propTypes = {
	className: PropTypes.string
};

FormGroup.defaultProps = {
	className: ""
};

export default FormGroup;
