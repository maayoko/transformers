/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Title = "Transformers";

const Logo = ({ color, variant, size }) => {
	let child = "";

	if (variant === "text") {
		child = <span>{Title}</span>;
	}

	if (variant === "link") {
		child = (
			<Link className={styles.link} to="/">
				{Title}
			</Link>
		);
	}

	return <div className={`${styles[size]} ${styles[color]}`}>{child}</div>;
};

Logo.propTypes = {
	color: PropTypes.oneOf(["black", "primary"]).isRequired,
	style: PropTypes.shape({}),
	variant: PropTypes.oneOf(["text", "image", "link"]).isRequired,
	size: PropTypes.oneOf(["big", "small"]).isRequired
};

Logo.defaultProps = {
	variant: "text"
};

export default Logo;
