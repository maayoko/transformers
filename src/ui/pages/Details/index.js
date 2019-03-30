import React from "react";
import { parse } from "query-string";
import Details from "./Details";

export default ({ location }) => {
	console.log(location);
	const { edit } = parse(location.search);
	return <Details transformer={location.state} edit={Boolean(edit)} />;
};
