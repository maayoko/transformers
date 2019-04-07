import React from "react";
import DetailsEvent from "./DetailsEvent";
import { withCurrentEvent } from "state/event/current";
import styles from "./DetailsEvent.module.scss";

export default withCurrentEvent(({ event, deleteEvent, setCurrentEvent, ...other }) => {
	return (
		<DetailsEvent
			event={event}
			onDelete={deleteEvent}
			setCurrent={setCurrentEvent}
			styles={styles}
			{...other}
		/>
	);
});
