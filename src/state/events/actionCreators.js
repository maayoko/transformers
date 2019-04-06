import * as googleEventsApi from "api/google/events";
import {
	GET_EVENTS,
	GET_EVENTS_FAILURE,
	GET_EVENTS_PENDING,
	GET_EVENTS_SUCCESS
} from "./actionTypes";

const getEvents = options => async dispatch => {
	dispatch({ type: GET_EVENTS_PENDING, payload: "Downloading events." });
	try {
		console.log(googleEventsApi);

		const response = await googleEventsApi.getAll(options);
		console.log(response);
		dispatch({ type: GET_EVENTS_SUCCESS, payload: "Events downloaded." });
		dispatch({ type: GET_EVENTS, payload: response.result.items });
	} catch (e) {
		console.log(e);
		dispatch({ type: GET_EVENTS_FAILURE, payload: "Couldn't download events." });
	}
};

export { getEvents };
