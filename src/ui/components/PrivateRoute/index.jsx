import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "state/auth";

export default withAuth(({ auth, ...other }) => {
	const isAuthenticated = auth.authenticated;

	return isAuthenticated ? <Route {...other} /> : <Redirect to="/login" />;
});
