import React, { useEffect } from "react";
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
		// clearCurrentEvent
	}) => {
		// useEffect(() => {
		// 	return () => {
		// 		clearCurrentEvent();
		// 	};
		// }, [currentEvent]);
		console.log(currentEvent);
		return (
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
		);
	}
);
