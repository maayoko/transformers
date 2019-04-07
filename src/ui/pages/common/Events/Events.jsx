import React from "react";
import PropTypes from "prop-types";
import Group from "../../../components/Group/Group";
import Select from "../../../components/Select/Select";
import EventDetails from "../Event/Details";
import CurrentEvent from "../Event/Current";

const Events = ({ events, selectOptions, onEventsLengthChange }) => (
	<Group align="between">
		<Group vertical>
			<Select onChange={onEventsLengthChange} id="events_period" options={selectOptions} />
			{events.map(event => (
				<EventDetails key={event._id} event={event} />
			))}
		</Group>
		<Group>
			<CurrentEvent />
		</Group>
	</Group>
);

Events.propTypes = {
	selectOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

Events.defaultProps = {};

export default Events;
