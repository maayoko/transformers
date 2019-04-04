import React, { useContext } from "react";
import AuthContext from "./context";

const withAuth = Component => props => {
	const { children } = props;
	const authManager = useContext(AuthContext);

	return React.createElement(Component, {
		...props,
		authManager,
		children
	});
};

export default withAuth;
