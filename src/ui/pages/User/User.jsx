import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import SidebarLinks from "../../components/SidebarLinks";
import Group from "../../components/Group/Group";
import Typography from "../../components/Typography/Typography";
import Events from "../common/Events";

const User = ({ user, sidebarLinks, styles }) => (
	<Group align="between">
		<SidebarLinks links={sidebarLinks} />
		<Switch>
			<Route exact path="/users/:user/events" component={Events} />
		</Switch>
		<Typography as="h1" color="white" size="body-big">
			hello user {user.name}
		</Typography>
	</Group>
);

User.propTypes = {
	user: PropTypes.shape({}).isRequired,
	sidebarLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	styles: PropTypes.shape({})
};

User.defaultProps = {
	styles: {}
};

export default User;
