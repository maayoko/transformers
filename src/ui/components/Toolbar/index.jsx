import React from "react";
import { withRouter } from "react-router-dom";
import { parse } from "query-string";
import Toolbar from "./Toolbar";

/**
 * Variables
 */
const basePath = "/transformers";
const baseLinks = [
	{ to: `${basePath}/add`, label: "Add new", icon: "add_icon" },
	{ to: `${basePath}/search`, label: "Search", icon: "search_icon" }
];

export default withRouter(({ location, ...other }) => {
	let links;
	const endPoint = location.pathname.split("/").slice(-1)[0];
	switch (endPoint) {
		case "details":
			const { edit } = parse(location.search);
			const shouldEdit = edit === "true";
			links = [
				...baseLinks,
				{
					to: {
						pathname: location.pathname,
						search: `?edit=${!shouldEdit}`,
						state: location.state
					},
					label: shouldEdit ? "Done" : "Edit",
					icon: "add_icon"
				}
			];
			break;
		default:
			links = [...baseLinks];
	}

	console.log(links);
	return <Toolbar links={links} {...other} />;
});
