import moment from "moment";

const getEventsDetails = response => {
	const eventsData = response.result.items;
	return eventsData.map(event => {
		const start = event.start;
		const end = event.end;
		const startDate =
			start.dateTime ||
			moment(start.date)
				.startOf("day")
				.add(1, "hour") ||
			moment()
				.startOf("day")
				.add(1, "hour");
		const endDate = end.dateTime || moment(end.date).endOf("day") || moment().endOf("day");
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

export { getEventsDetails };
