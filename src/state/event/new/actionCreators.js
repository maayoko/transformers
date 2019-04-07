import * as googleEventsApi from "api/google/events";
import { prepareEventForCreate, getEventDetails } from "api/google/events/selectors";
import { addEvent } from "../../events";
import { createAsyncAction, createBasicAction } from "../../utils/actions";
import * as eventService from "domain/services/eventService";
import {
	CLEAR_NEW_EVENT,
	CREATE_NEW_EVENT,
	UPDATE_NEW_EVENT_DATE,
	UPDATE_NEW_EVENT_END_TIME,
	UPDATE_NEW_EVENT_START_TIME,
	UPDATE_NEW_EVENT_TITLE
} from "./actionTypes";

const updateNewEventTitle = createBasicAction(UPDATE_NEW_EVENT_TITLE);
const updateNewEventDate = createBasicAction(UPDATE_NEW_EVENT_DATE);
const updateNewEventStartTime = createBasicAction(UPDATE_NEW_EVENT_START_TIME);
const updateNewEventEndTime = createBasicAction(UPDATE_NEW_EVENT_END_TIME);
const clearNewEvent = createBasicAction(CLEAR_NEW_EVENT);
const createNewEvent = createAsyncAction(CREATE_NEW_EVENT, {
	pending: {
		payload: () => "Creating new event."
	},
	success: {
		before: async (event, dispatch) => {
			const response = await googleEventsApi.createEvent(prepareEventForCreate(event));
			const _event = eventService.createEvent(getEventDetails(response));
			dispatch(addEvent(_event));
			dispatch(clearNewEvent());
		},
		payload: () => "Event created succesfully."
	},
	failure: {
		payload: () => "Failed to create a new event."
	}
});

export {
	updateNewEventDate,
	updateNewEventEndTime,
	updateNewEventStartTime,
	updateNewEventTitle,
	clearNewEvent,
	createNewEvent
};
