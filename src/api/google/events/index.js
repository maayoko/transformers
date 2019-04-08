import { getInstance } from "plugins/google/events";

const getAll = options => {
	const eventsApi = getInstance();
	return eventsApi.getEvents(options);
};

const updateEvent = event => {
	const eventsApi = getInstance();
	return eventsApi.updateEvent(event);
};

const deleteEvent = event => {
	const eventsApi = getInstance();
	return eventsApi.deleteEvent(event);
};

const createEvent = event => {
	const eventsApi = getInstance();
	return eventsApi.createEvent(event);
};

export { getAll, updateEvent, deleteEvent, createEvent };
