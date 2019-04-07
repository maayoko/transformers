import React from "react";
import Event from "./common/Event";
import { withNewEvent } from "state/event/new";
import actions from "../common/actions";

export default withNewEvent(
	({
		newEvent,
		updateNewEventTitle,
		updateNewEventDate,
		updateNewEventStartTime,
		updateNewEventEndTime,
		clearNewEvent,
		createNewEvent
	}) => {
		return (
			<Event
				event={newEvent}
				buttonLabel="Create"
				{...actions({
					updateEventTitle: updateNewEventTitle,
					updateEventDate: updateNewEventDate,
					updateEventStartTime: updateNewEventStartTime,
					updateEventEndTime: updateNewEventEndTime,
					onEventSubmit: createNewEvent
				})}
			/>
		);
	}
);
