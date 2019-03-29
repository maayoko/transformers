import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "../../components/Typography/Typography";
import styles from "./SidebarLink.module.scss";

const SidebarLink = ({ isActive, to, onClick, children, ...other }) => {
	const classes = classNames(styles.root, { [styles.active]: isActive });

	return (
		<Link onClick={onClick} {...other} className={classes} to={to}>
			<Typography size="body-mid" uppercase color={isActive ? "primary" : "white"}>
				{children}
			</Typography>
		</Link>
	);
};

SidebarLink.propTypes = {
	isActive: PropTypes.bool,
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired
};

SidebarLink.defaultProps = {
	isActive: false
};

export default SidebarLink;
