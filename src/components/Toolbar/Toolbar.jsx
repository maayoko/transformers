import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Toolbar.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const basePath = "/transformers";
const links = [
	{ to: `${basePath}/add`, label: "Add new", icon: "add_icon" },
	{ to: `${basePath}/search`, label: "Search", icon: "search_icon" }
];

const Provider = React.createContext();

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
			to: PropTypes.string.isRequired,
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
	style: {},
	links
};

export default Toolbar;
