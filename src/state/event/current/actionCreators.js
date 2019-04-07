import * as googleEventsApi from "api/google/events";
import { prepareEventForUpdate } from "api/google/events/selectors";
import { updateEvent } from "../../events";
import {
	UPDATE_CURRENT_EVENT_DATE,
	UPDATE_CURRENT_EVENT_END_TIME,
	UPDATE_CURRENT_EVENT_START_TIME,
	UPDATE_CURRENT_EVENT_TITLE,
	CLEAR_CURRENT_EVENT,
	SET_CURRENT_EVENT,
	UPDATE_CURRENT_EVENT_FAILURE,
	UPDATE_CURRENT_EVENT_PENDING,
	UPDATE_CURRENT_EVENT_SUCCESS
} from "./actionTypes";

const updateCurrentEventTitle = title => {
	return { type: UPDATE_CURRENT_EVENT_TITLE, payload: title };
};

const updateCurrentEventDate = date => {
	return { type: UPDATE_CURRENT_EVENT_DATE, payload: date };
};

const updateCurrentEventStartTime = time => {
	return { type: UPDATE_CURRENT_EVENT_START_TIME, payload: time };
};

const updateCurrentEventEndTime = time => {
	return { type: UPDATE_CURRENT_EVENT_END_TIME, payload: time };
};

const clearCurrentEvent = () => {
	return { type: CLEAR_CURRENT_EVENT };
};

const setCurrentEvent = event => {
	return { type: SET_CURRENT_EVENT, payload: event };
};

const updateCurrentEvent = event => async dispatch => {
	dispatch({ type: UPDATE_CURRENT_EVENT_PENDING, payload: "Updating current event." });
	try {
		await googleEventsApi.updateEvent(prepareEventForUpdate(event));
		dispatch({
			type: UPDATE_CURRENT_EVENT_SUCCESS,
			payload: "Current event succesfully updated."
		});
		dispatch(updateEvent(event));
		dispatch(clearCurrentEvent());
	} catch (e) {
		dispatch({ type: UPDATE_CURRENT_EVENT_FAILURE, payload: "Updating current event failed." });
	}
};

export {
	updateCurrentEvent,
	updateCurrentEventDate,
	updateCurrentEventEndTime,
	updateCurrentEventStartTime,
	updateCurrentEventTitle,
	setCurrentEvent,
	clearCurrentEvent
};
