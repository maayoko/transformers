import React, { useContext } from "react";
import AuthContext from "./context";

const withAuth = Component => (props, ...other) => {
	const { children } = props;
	const auth = useContext(AuthContext);

	return React.createElement(Component, {
		...props,
		auth,
		children
	});
};

export default withAuth;
