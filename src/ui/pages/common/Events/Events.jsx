import React from "react";
import PropTypes from "prop-types";
import Group from "../../../components/Group/Group";
import FormGroup from "../../../components/FormGroup/FormGroup";
import Label from "../../../components/Label/Label";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import Event from "../Event";

const Events = ({ events, selectOptions, onEventsLengthChange }) => (
	<Group vertical>
		<div style={{ color: "white" }}>Events: {events.length}</div>
		<Select onChange={onEventsLengthChange} id="events_period" options={selectOptions} />
		{events.map(event => (
			<Event key={event._id} event={event} />
		))}
	</Group>
);

Events.propTypes = {
	selectOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

Events.defaultProps = {};

export default Events;
