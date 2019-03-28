import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Group.module.scss";

const Group = ({ className, children }) => {
	const classes = classNames(styles.root, className);

	return <div className={classes}>{children}</div>;
};

Group.propTypes = {
	className: PropTypes.string
};
Group.defaultProps = {
	className: ""
};

export default Group;
