import React, { useEffect } from "react";
import Events from "./Events";
import { withEvents } from "state/events";
import moment from "moment";

export default withEvents(({ events, getEvents }) => {
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

	console.log(events);

	return (
		<Events
			onEventsLengthChange={onEventsLengthChange}
			events={events}
			selectOptions={selectOptions}
		/>
	);
});
