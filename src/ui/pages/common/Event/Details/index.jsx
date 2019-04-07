import React from "react";
import DetailsEvent from "./DetailsEvent";
import { withCurrentEvent } from "state/event/current";
import { withEvents } from "state/events";
import styles from "./DetailsEvent.module.scss";

export default withEvents(
	withCurrentEvent(({ event, deleteEvent, setCurrentEvent, ...other }) => {
		return (
			<DetailsEvent
				event={event}
				onDelete={deleteEvent}
				setCurrent={setCurrentEvent}
				styles={styles}
				{...other}
			/>
		);
	})
);
