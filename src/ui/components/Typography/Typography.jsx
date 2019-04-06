import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Typography.module.scss";

const Typography = ({ as: As, uppercase, color, opacity, size, bold, children }) => {
	const classes = classNames(
		{ [styles.uppercase]: uppercase },
		{ [styles[opacity]]: opacity != null },
		{ [styles.bold]: bold },
		styles[size],
		styles[color]
	);

	return <As className={classes}>{children}</As>;
};

Typography.propTypes = {
	as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]),
	uppercase: PropTypes.bool,
	color: PropTypes.oneOf(["white", "black", "primary", "grey"]),
	opacity: PropTypes.oneOf(["visible", "high", "mid", "low", "hidden"]),
	size: PropTypes.oneOf(["header-big", "header-mid", "body-big", "body-mid", "body-small"]),
	bold: PropTypes.bool
};

Typography.defaultProps = {
	as: "span",
	uppercase: false,
	color: "black",
	size: "body-mid",
	bold: false
};

export default Typography;
