import Event from "../entities/Event";

const createEvent = event => {
	return new Event(
		event.title,
		event.startTime,
		event.endTime,
		event.startDate,
		event.endDate,
		event.id
	);
};

const createEvents = events => {
	return events.map(event => createEvent(event));
};

export { createEvent, createEvents };
