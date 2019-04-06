import { getInstance } from "core/common/auth/google/events";

const getAll = options => {
	const calendarApi = getInstance();
	return calendarApi.getEvents(options);
};

export { getAll };
