import React, { useState } from "react";
import PropTypes from "prop-types";
import SidebarLink from "../SidebarLink/SidebarLink";
import styles from "./SidebarLinks.module.scss";

const SidebarLinks = ({ links, initialActiveIdx }) => {
	const [activeLinkIdx, setActiveLinkIdx] = useState(initialActiveIdx);

	return (
		<div className={styles.root}>
			{links.map((sidebarLink, idx) => (
				<SidebarLink
					isActive={activeLinkIdx === idx}
					onClick={() => setActiveLinkIdx(idx)}
					key={idx}
					to={sidebarLink.to}>
					{sidebarLink.label}
				</SidebarLink>
			))}
		</div>
	);
};

SidebarLinks.propTypes = {
	links: PropTypes.arrayOf({
		to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
		label: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			PropTypes.func,
			PropTypes.node
		])
	}).isRequired,
	initialActiveIdx: PropTypes.number
};
SidebarLinks.defaultProps = {
	initialActiveIdx: 0
};

export default SidebarLinks;
