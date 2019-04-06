import React from "react";
import Event from "./Event";
import { withCurrentEvent } from "state/currentEvent";
import styles from "./Event.module.scss";

export default withCurrentEvent(({ event, deleteEvent, setCurrentEvent, ...other }) => {
	return (
		<Event
			event={event}
			onDelete={deleteEvent}
			setCurrent={setCurrentEvent}
			styles={styles}
			{...other}
		/>
	);
});
