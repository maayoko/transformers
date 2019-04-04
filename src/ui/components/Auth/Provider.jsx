import React from "react";
import PropTypes from "prop-types";
import AuthContext from "./context";

const Provider = ({ auth, children }) => {
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

Provider.propTypes = {
	auth: PropTypes.shape({
		enable: PropTypes.func.isRequired,
		disable: PropTypes.func.isRequired
	}).isRequired
};

export default Provider;
