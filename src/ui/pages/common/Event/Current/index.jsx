import React from "react";
import Event from "../common/Event";
import { withCurrentEvent } from "state/event/current";
import actions from "../common/actions";

export default withCurrentEvent(
	({
		currentEvent,
		updateCurrentEventTitle,
		updateCurrentEventDate,
		updateCurrentEventStartTime,
		updateCurrentEventEndTime,
		updateCurrentEvent
	}) => {
		return currentEvent ? (
			<Event
				event={currentEvent}
				buttonLabel="Update"
				{...actions(
					{
						updateEventTitle: updateCurrentEventTitle,
						updateEventDate: updateCurrentEventDate,
						updateEventStartTime: updateCurrentEventStartTime,
						updateEventEndTime: updateCurrentEventEndTime,
						submitEvent: updateCurrentEvent
					},
					currentEvent
				)}
			/>
		) : null;
	}
);
