import React from "react";
import PropTypes from "prop-types";
import Group from "../../../components/Group/Group";
import Select from "../../../components/Select/Select";
import EventDetails from "../Event/Details";
import CurrentEvent from "../Event/Current";
import NewEvent from "../Event/New";
import Overlay from "../../../components/Overlay";
import Button from "../../../components/Button/Button";
import Typography from "../../../components/Typography/Typography";

const Events = ({ events, styles, selectOptions, onEventsLengthChange, createNewOptions }) => (
	<Group className={styles.root} align="between">
		<Group vertical>
			<Group className={styles.toolbar} align="between">
				<Select
					selected={selectOptions[1]}
					onChange={onEventsLengthChange}
					id="events_period"
					options={selectOptions}
				/>
				<Button
					onClick={() =>
						createNewOptions.updateShouldCreate(!createNewOptions.shouldCreate)
					}
					type="basic">
					Create new
				</Button>
			</Group>
			<Group className={styles.events_list_group} vertical>
				{Object.keys(events).map(eventKey => {
					const _events = events[eventKey];
					return (
						<div className={styles.events_list} key={eventKey}>
							<Typography color="primary" size="body-small">
								{eventKey}
							</Typography>
							{_events.map(event => (
								<EventDetails key={event._id} event={event} />
							))}
						</div>
					);
				})}
			</Group>
		</Group>
		<Group>
			<CurrentEvent />
		</Group>
		{createNewOptions.shouldCreate && (
			<Overlay closeButton={{ onClose: () => createNewOptions.updateShouldCreate(false) }}>
				<NewEvent />
			</Overlay>
		)}
	</Group>
);

Events.propTypes = {
	selectOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	createNewOptions: PropTypes.shape({
		shouldCreate: PropTypes.bool,
		updateShouldCreate: PropTypes.func
	})
};

Events.defaultProps = {
	createNewOptions: {
		shouldCreate: false,
		updateShouldCreate: () => {}
	}
};

export default Events;
