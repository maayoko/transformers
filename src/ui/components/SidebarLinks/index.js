import React from "react";
import { withRouter } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";

export default withRouter(({ location, links, ...other }) => {
	let initialActiveIdx = links.findIndex(link => link.to === location.pathname);
	initialActiveIdx = initialActiveIdx > -1 ? initialActiveIdx : 0;
	return <SidebarLinks links={links} initialActiveIdx={initialActiveIdx} {...other} />;
});
