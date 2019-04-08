import { getEndDate, getStartDate, getTimes } from "./utils";

const _getEventDetails = event => {
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
};

const getEventDetails = response => {
	const event = response.result;
	return _getEventDetails(event);
};

const getEventsDetails = response => {
	const eventsData = response.result.items;
	return eventsData.map(event => _getEventDetails(event));
};

const prepareEventForUpdate = event => {
	const { endTime, startTime } = getTimes(event);
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

const prepareEventForCreate = event => {
	const { startTime, endTime } = getTimes(event);
	return {
		calendarId: "primary",
		summary: event.title,
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

export {
	getEventDetails,
	getEventsDetails,
	prepareEventForUpdate,
	prepareEventForDelete,
	prepareEventForCreate
};
