import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import SidebarLinks from "../../components/SidebarLinks";
import Group from "../../components/Group/Group";
import Typography from "../../components/Typography/Typography";
import Events from "../common/Events";

const User = ({ user, sidebarLinks, styles }) => (
	<Group className={styles.root} align="between">
		<Group className={styles.sidebar_links}>
			<SidebarLinks links={sidebarLinks} />
		</Group>
		<Group className={styles.routes}>
			<Switch>
				<Route exact path="/users/:user/events" component={Events} />
				<Route
					exact
					path="/users/:user"
					render={() => <Redirect to={`/users/${user.link}/home`} />}
				/>
			</Switch>
		</Group>
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
