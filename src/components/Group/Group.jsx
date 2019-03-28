import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Group.module.scss";

const Group = ({ className, style, children, align, vertical, fullWidth, wrap, ...other }) => {
	const classes = classNames(
		styles.root,
		className,
		{ [styles[`align-${align}`]]: !!align },
		{ [styles.vertical]: vertical },
		{ [styles.full_width]: fullWidth },
		{ [styles.wrap]: wrap }
	);

	return (
		<div style={style} className={classes} {...other}>
			{children}
		</div>
	);
};

Group.propTypes = {
	className: PropTypes.string,
	style: PropTypes.shape({}),
	align: PropTypes.oneOf(["center", "end", "start", "baseline", "stretch", "between", "around"]),
	vertical: PropTypes.bool,
	fullWidth: PropTypes.bool,
	wrap: PropTypes.bool
};
Group.defaultProps = {
	className: "",
	style: {},
	vertical: false,
	fullWidth: false,
	wrap: false
};

export default Group;
