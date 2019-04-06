import { createEvent } from "domain/services/eventService";
import {
	UPDATE_CURRENT_EVENT_DATE,
	UPDATE_CURRENT_EVENT_START_TIME,
	UPDATE_CURRENT_EVENT_END_TIME,
	UPDATE_CURRENT_EVENT_TITLE,
	CLEAR_CURRENT_EVENT,
	SET_CURRENT_EVENT
} from "./actionTypes";

const currentEvent = (state = createEvent({}), action) => {
	switch (action.type) {
		case UPDATE_CURRENT_EVENT_DATE:
			return { ...state, date: action.payload };

		case UPDATE_CURRENT_EVENT_TITLE:
			return { ...state, title: action.payload };

		case UPDATE_CURRENT_EVENT_START_TIME:
			return { ...state, startTime: action.payload };

		case UPDATE_CURRENT_EVENT_END_TIME:
			return { ...state, endTime: action.payload };

		case CLEAR_CURRENT_EVENT:
			return action.payload;

		case SET_CURRENT_EVENT:
			return { ...action.payload };

		default:
			return state;
	}
};

export { currentEvent };
