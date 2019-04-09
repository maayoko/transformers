/**
 * External deps
 */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

/**
 * Internal deps
 */
import Typography from "../Typography/Typography";
import styles from "./Toolbar.module.scss";

const Toolbar = ({ style, links, activeLink, disabledLinks }) => {
	return (
		<div style={style} className={styles.root}>
			{links.map((link, idx) => {
				const classes = classNames(styles.link_wrapper, {
					[styles.active_link]: activeLink && activeLink === link,
					[styles.disabled_link]: !!disabledLinks.find(dLink => dLink === link)
				});
				return (
					<Link key={idx} to={link.to} className={classes}>
						<span className={styles[link.icon]} />
						<Typography bold size="body-small" color="white">
							{link.label}
						</Typography>
					</Link>
				);
			})}
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
			icon: PropTypes.oneOf([
				"add_icon",
				"search_icon",
				"home_icon",
				"edit_icon",
				"done_icon",
				"delete_icon",
				"login_icon",
				"user_icon"
			])
		})
	),
	activeLink: PropTypes.any,
	disabledLinks: PropTypes.array
};
Toolbar.defaultProps = {
	style: {},
	disabledLinks: []
};

export default Toolbar;
