import * as googleEventsApi from "api/google/events";
import { getEventsDetails } from "api/google/events/selectors";
import * as eventService from "domain/services/eventService";
import {
	GET_EVENTS,
	GET_EVENTS_FAILURE,
	GET_EVENTS_PENDING,
	GET_EVENTS_SUCCESS,
	UPDATE_EVENT
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

export { getEvents, updateEvent };
