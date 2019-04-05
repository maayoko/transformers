import { getInstance } from "core/common/auth/google/calendar";

const getAll = options => {
	const calendarApi = getInstance();
	return calendarApi.getEvents(options);
};

export { getAll };
