import React from "react";
import PropTypes from "prop-types";
import Group from "../../../components/Group/Group";
import Select from "../../../components/Select/Select";
import EventDetails from "../Event/Details";
import CurrentEvent from "../Event/Current";
import NewEvent from "../Event/New";
import Overlay from "../../../components/Overlay";
import Button from "../../../components/Button/Button";

const Events = ({ events, styles, selectOptions, onEventsLengthChange }) => (
	<Group className={styles.root} align="between">
		<Group vertical>
			<Group className={styles.toolbar} align="between">
				<Select
					onChange={onEventsLengthChange}
					id="events_period"
					options={selectOptions}
				/>
				<Button type="basic">Create new</Button>
			</Group>
			<Group className={styles.events_list} vertical>
				{events.map(event => (
					<EventDetails key={event._id} event={event} />
				))}
			</Group>
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
