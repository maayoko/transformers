import { createEvent } from "domain/services/eventService";
import {
	CLEAR_NEW_EVENT,
	UPDATE_NEW_EVENT_DATE,
	UPDATE_NEW_EVENT_END_TIME,
	UPDATE_NEW_EVENT_START_TIME,
	UPDATE_NEW_EVENT_TITLE
} from "./actionTypes";

const currentEvent = (state = createEvent({}), action) => {
	switch (action.type) {
		case UPDATE_NEW_EVENT_DATE:
			return { ...state, startDate: action.payload, endDate: action.payload };

		case UPDATE_NEW_EVENT_TITLE:
			return { ...state, title: action.payload };

		case UPDATE_NEW_EVENT_START_TIME:
			return { ...state, startTime: action.payload };

		case UPDATE_NEW_EVENT_END_TIME:
			return { ...state, endTime: action.payload };

		case CLEAR_NEW_EVENT:
			return createEvent({});

		default:
			return state;
	}
};

export { currentEvent };
