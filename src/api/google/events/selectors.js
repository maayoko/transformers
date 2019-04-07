import moment from "moment";

const getDate = dateTime => {
	return moment(dateTime).toDate();
};
const getStartDate = eventTime => {
	if (eventTime.dateTime) {
		return getDate(eventTime.dateTime);
	}

	// if date prop is not defined moment will take today's date
	return moment(eventTime.date)
		.startOf("day")
		.add(1, "hour")
		.toDate();
};

const getEndDate = eventTime => {
	if (eventTime.dateTime) {
		return getDate(eventTime.dateTime);
	}

	return moment(eventTime.date)
		.endOf("day")
		.toDate();
};

const getEventsDetails = response => {
	const eventsData = response.result.items;
	return eventsData.map(event => {
		const start = event.start;
		const end = event.end;
		const startDate = getStartDate(start);
		const endDate = getEndDate(end);

		return {
			id: event.id,
			title: event.summary,
			startDate: startDate,
			endDate: endDate,
			startTime: startDate,
			endTime: endDate
		};
	});
};

const prepareEventForUpdate = event => {
	const date = moment(event.startDate).format("YYYY-MM-DD");
	const start = moment(event.startTime).format("kk:mm");
	const end = moment(event.endTime).format("kk:mm");
	const startTime = moment(`${date} ${start}`).format();
	const endTime = moment(`${date} ${end}`).format();
	return {
		calendarId: "primary",
		summary: event.title,
		eventId: event.id,
		start: {
			dateTime: startTime
		},
		end: {
			dateTime: endTime
		}
	};
};

const prepareEventForDelete = event => {
	const eventId = event.id;
	return {
		calendarId: "primary",
		eventId
	};
};

export { getEventsDetails, prepareEventForUpdate, prepareEventForDelete };
