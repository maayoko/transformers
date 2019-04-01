import React from "react";
// import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { Transition, config } from "react-spring/renderprops";

const AnimatedSwitch = ({ children }) => {
	return (
		<Route
			render={({ location }) => (
				<Transition
					config={config.slow}
					items={location}
					keys={location => location.pathname}
					from={{ opacity: 0, transform: "scale3d(0.5,0.5,0.5)" }}
					enter={{ opacity: 1, transform: "scale3d(1,1,1)" }}
					leave={{ opacity: 0, transform: "scale3d(0.5,0.5,0.5)" }}>
					{location => style => <Switch location={location}>{children(style)}</Switch>}
				</Transition>
			)}
		/>
	);
};

AnimatedSwitch.propTypes = {};

export default AnimatedSwitch;
