import React from "react";
import PropTypes from "prop-types";
import AuthContext from "./context";

const Provider = ({ loader, children }) => {
	return <AuthContext.Provider value={loader}>{children}</AuthContext.Provider>;
};

Provider.propTypes = {
	loader: PropTypes.shape({
		load: PropTypes.func.isRequired,
		unload: PropTypes.func.isRequired
	}).isRequired
};

export default Provider;
