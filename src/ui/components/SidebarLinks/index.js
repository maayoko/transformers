import React from "react";
import { withRouter } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";

export default withRouter(({ location, links, ...other }) => {
	const initialActiveIdx = links.findIndex(link => link.to === location.pathname);
	return <SidebarLinks links={links} initialActiveIdx={initialActiveIdx} {...other} />;
});
