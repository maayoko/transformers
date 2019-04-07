import React, { useEffect } from "react";
import Events from "./Events";
import { withEvents } from "state/events";
import { withCurrentEvent } from "state/event/current";
import moment from "moment";
import styles from "./Events.module.scss";

export default withCurrentEvent(
	withEvents(({ events, setCurrentEvent, currentEvent, getEvents }) => {
		const selectOptions = [
			{
				value: moment()
					.startOf("day")
					.toISOString(),
				label: "Today"
			},
			{
				value: moment()
					.add(7, "days")
					.endOf("day")
					.toISOString(),
				label: "Upcoming 7 days"
			},
			{
				value: moment()
					.add(30, "days")
					.endOf("day")
					.toISOString(),
				label: "Upcoming 30 days"
			}
		];

		// useEffect(() => {
		// 	getEvents({
		// 		calendarId: "primary",
		// 		timeMin: moment()
		// 			.startOf("day")
		// 			.toISOString(),
		// 		timeMax: moment()
		// 			.endOf("day")
		// 			.toISOString(),
		// 		showDeleted: false,
		// 		singleEvents: true,
		// 		orderBy: "startTime",
		// 		maxResults: 10
		// 	});
		// }, [events.length]);

		const onEventsLengthChange = event => {
			getEvents({
				calendarId: "primary",
				timeMin: moment()
					.startOf("day")
					.toISOString(),
				timeMax: event.target.value,
				showDeleted: false,
				singleEvents: true,
				orderBy: "startTime",
				maxResults: 10
			});
		};

		!currentEvent.title && events.length && setCurrentEvent(events[0]);

		return (
			<Events
				onEventsLengthChange={onEventsLengthChange}
				events={events}
				selectOptions={selectOptions}
				styles={styles}
			/>
		);
	})
);
