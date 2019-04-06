import { getInstance } from "core/common/auth/google/events";

const getAll = options => {
	const eventsApi = getInstance();
	return eventsApi.getEvents(options);
};

const updateEvent = event => {
	const eventsApi = getInstance();
	return eventsApi.updateEvent(event);
};

export { getAll, updateEvent };
