import { createEvent } from "domain/services/eventService";
import {
	CLEAR_NEW_EVENT,
	UPDATE_NEW_EVENT_DATE,
	UPDATE_NEW_EVENT_END_TIME,
	UPDATE_NEW_EVENT_START_TIME,
	UPDATE_NEW_EVENT_TITLE
} from "./actionTypes";

const _newEvent = createEvent({
	title: "Sample title",
	startTime: new Date(),
	endTime: new Date(),
	startDate: new Date(),
	endDate: new Date()
});

const newEvent = (state = _newEvent, action) => {
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
			return _newEvent;

		default:
			return state;
	}
};

export { newEvent };
