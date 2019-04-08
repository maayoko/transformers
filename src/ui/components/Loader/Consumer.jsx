import React, { useContext } from "react";
import LoaderConext from "./context";

const withLoader = Component => props => {
	const { children } = props;
	const loader = useContext(LoaderConext);

	return React.createElement(Component, {
		...props,
		loader,
		children
	});
};

export default withLoader;
