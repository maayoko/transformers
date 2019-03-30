/**
 * External deps
 */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Internal deps
 */
import Typography from "../Typography/Typography";
import styles from "./Toolbar.module.scss";

const Toolbar = ({ style, links }) => {
	return (
		<div style={style} className={styles.root}>
			{links.map((link, idx) => (
				<Link key={idx} to={link.to} className={styles.link_wrapper}>
					<span className={styles[link.icon]} />
					<Typography bold size="body-small" color="white">
						{link.label}
					</Typography>
				</Link>
			))}
		</div>
	);
};

Toolbar.propTypes = {
	style: PropTypes.shape({}),
	links: PropTypes.arrayOf(
		PropTypes.shape({
			to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
			label: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
				PropTypes.node,
				PropTypes.func
			]).isRequired,
			icon: PropTypes.oneOf(["add_icon", "search_icon"])
		})
	)
};
Toolbar.defaultProps = {
	style: {}
};

export default Toolbar;
