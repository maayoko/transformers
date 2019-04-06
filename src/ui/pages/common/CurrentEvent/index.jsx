import React, { useEffect } from "react";
import CurrentEvent from "./CurrentEvent";
import { withCurrentEvent } from "state/currentEvent";

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

		const onTitleChange = e => {
			updateCurrentEventTitle(e.target.value);
		};

		const onDateChange = e => {
			updateCurrentEventDate(e.target.value);
		};

		const onStartTimeChange = e => {
			updateCurrentEventStartTime(e.target.value);
		};

		const onEndTimeChange = e => {
			updateCurrentEventEndTime(e.target.value);
		};

		const onUpdateEvent = () => {
			updateCurrentEvent(currentEvent);
		};

		return (
			<CurrentEvent
				currentEvent={currentEvent}
				onDateChange={onDateChange}
				onTitleChange={onTitleChange}
				onStartTimeChange={onStartTimeChange}
				onEndTimeChange={onEndTimeChange}
				updateEvent={onUpdateEvent}
			/>
		);
	}
);
