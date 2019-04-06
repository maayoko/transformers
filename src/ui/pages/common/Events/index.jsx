import React, { useEffect } from "react";
import Events from "./Events";
import { withEvents } from "state/events";

export default withEvents(({ events, getEvents }) => {
	useEffect(() => {
		console.log(events);
		getEvents({
			calendarId: "primary",
			timeMin: new Date().toISOString(),
			showDeleted: false,
			singleEvents: true,
			maxResults: 10,
			orderBy: "startTime"
		});
	}, [events.length]);

	return <Events events={events} />;
});
