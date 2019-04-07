import { getInstance } from "core/common/auth/google/events";

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

export { getAll, updateEvent, deleteEvent };
