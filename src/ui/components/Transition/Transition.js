import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Transition.module.scss";

const Transition = ({ scale, children, ...other }) => {
	const classes = classNames(styles.root, { [styles.scale]: scale });

	return (
		<span className={classes} {...other}>
			{children}
		</span>
	);
};

Transition.propTypes = {
	scale: PropTypes.bool
};

Transition.defaultProps = {
	scale: false
};

export default Transition;
