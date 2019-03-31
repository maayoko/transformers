import React from "react";
import { withRouter } from "react-router-dom";
import { parse } from "query-string";
import Toolbar from "./Toolbar";

/**
 * Variables
 */
const basePath = "/transformers";
const baseLinks = [
	{ to: `/`, label: "Home", icon: "home_icon" },
	{ to: `${basePath}/add`, label: "Add new", icon: "add_icon" },
	{ to: `${basePath}/search`, label: "Search", icon: "search_icon" }
];

export default withRouter(({ location, match, ...other }) => {
	console.log(match);
	let links;
	const endPoint = location.pathname.split("/").slice(-1)[0];
	switch (endPoint) {
		case "details":
			const { edit } = parse(location.search);
			const shouldEdit = JSON.parse(edit);
			links = [
				...baseLinks,
				{
					to: {
						pathname: location.pathname,
						search: `?edit=${!shouldEdit}`,
						state: location.state
					},
					label: shouldEdit ? "Done" : "Edit",
					icon: shouldEdit ? "done_icon" : "edit_icon"
				}
			];
			break;
		default:
			links = [...baseLinks];
	}
	return (
		<Toolbar
			activeLink={links.find(link => link.to === location.pathname)}
			links={links}
			{...other}
		/>
	);
});
