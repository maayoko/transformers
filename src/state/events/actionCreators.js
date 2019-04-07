import * as googleEventsApi from "api/google/events";
import { getEventsDetails, prepareEventForDelete } from "api/google/events/selectors";
import * as eventService from "domain/services/eventService";
import {
	GET_EVENTS,
	GET_EVENTS_FAILURE,
	GET_EVENTS_PENDING,
	GET_EVENTS_SUCCESS,
	UPDATE_EVENT,
	DELETE_EVENT_FAILURE,
	DELETE_EVENT_PENDING,
	DELETE_EVENT_SUCCESS,
	DELETE_EVENT
} from "./actionTypes";

const getEvents = options => async dispatch => {
	dispatch({ type: GET_EVENTS_PENDING, payload: "Downloading events." });
	try {
		const response = await googleEventsApi.getAll(options);
		const events = eventService.createEvents(getEventsDetails(response));
		dispatch({ type: GET_EVENTS, payload: events });
		dispatch({ type: GET_EVENTS_SUCCESS, payload: "Events downloaded." });
	} catch (e) {
		dispatch({ type: GET_EVENTS_FAILURE, payload: "Couldn't download events." });
	}
};

const updateEvent = event => {
	return { type: UPDATE_EVENT, payload: event };
};

const deleteEvent = event => async dispatch => {
	dispatch({ type: DELETE_EVENT_PENDING, payload: "Deleting event." });
	try {
		await googleEventsApi.deleteEvent(prepareEventForDelete(event));
		dispatch({
			type: DELETE_EVENT_SUCCESS,
			payload: "Event succesfully deleted."
		});
		dispatch({ type: DELETE_EVENT, payload: event });
	} catch (e) {
		dispatch({ type: DELETE_EVENT_FAILURE, payload: "Deleting event failed." });
	}
};

export { getEvents, updateEvent, deleteEvent };
