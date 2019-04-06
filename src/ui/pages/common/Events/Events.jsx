import React from "react";
import PropTypes from "prop-types";
import Group from "../../../components/Group/Group";
import Select from "../../../components/Select/Select";
import Event from "../Event";
import CurrentEvent from "../CurrentEvent";

const Events = ({ events, selectOptions, onEventsLengthChange }) => (
	<Group align="between">
		<Group vertical>
			<Select onChange={onEventsLengthChange} id="events_period" options={selectOptions} />
			{events.map(event => (
				<Event key={event._id} event={event} />
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
