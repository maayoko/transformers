import Event from "../entities/Event";

const createEvent = event => {
	return new Event(event.title, event.startTime, event.endTime, event.startDate, event.endDate);
};

const createEvents = events => {
	console.log(events);
	return events.map(event => createEvent(event));
};

export { createEvent, createEvents };
