import React from "react";
import { withRouter } from "react-router-dom";
import { parse, stringify } from "query-string";
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
	let links;
	let disabledLinks = [];
	const endPoint = location.pathname.split("/").slice(-1)[0];
	switch (endPoint) {
		case "details":
			const { edit, delete: _delete } = parse(location.search);
			const shouldEdit = JSON.parse(edit);
			const isDeleted = JSON.parse(_delete);
			const detailsLinks = [
				{
					to: {
						pathname: location.pathname,
						search: `?${stringify({ edit: !shouldEdit, delete: false })}`,
						state: location.state
					},
					label: shouldEdit ? "Done" : "Edit",
					icon: shouldEdit ? "done_icon" : "edit_icon"
				},
				{
					to: {
						pathname: location.pathname,
						search: `?${stringify({ edit: shouldEdit, delete: true })}`,
						state: location.state
					},
					label: "Delete",
					icon: "delete_icon"
				}
			];

			isDeleted && disabledLinks.push(...detailsLinks);
			links = [...baseLinks, ...detailsLinks];
			break;
		default:
			links = [...baseLinks];
	}
	return (
		<Toolbar
			activeLink={links.find(link => link.to === location.pathname)}
			disabledLinks={disabledLinks}
			links={links}
			{...other}
		/>
	);
});
