import React from "react";
import Event from "./Event";
import styles from "./Event.module.scss";

export default ({ event, deleteEvent, setCurrentEvent, ...other }) => {
	return (
		<Event
			event={event}
			onDelete={deleteEvent}
			setCurrent={setCurrentEvent}
			styles={styles}
			{...other}
		/>
	);
};
