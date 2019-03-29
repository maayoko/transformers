import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ButtonLink = ({ to, style, className, children, ...other }) => {
	return (
		<Link className={className} style={style} to={to} {...other}>
			<Button variant="primary">{children}</Button>
		</Link>
	);
};

ButtonLink.propTypes = {
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
	style: PropTypes.shape({}),
	className: PropTypes.string
};

ButtonLink.defaultProps = {
	style: {},
	className: ""
};

export default ButtonLink;
