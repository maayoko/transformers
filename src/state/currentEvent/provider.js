import { connect } from "react-redux";
import * as action from "./actionCreators";
import { getCurrentEvent } from "./selectors";

const withCurrentEvent = connect(
	state => ({
		currentEvent: getCurrentEvent(state)
	}),
	dispatch => ({
		updateCurrentEventTitle: title => dispatch(action.updateCurrentEventTitle(title)),
		updateCurrentEvent: event => dispatch(action.updateCurrentEvent(event)),
		updateCurrentEventDate: date => dispatch(action.updateCurrentEventDate(date)),
		updateCurrentEventEndTime: endTime => dispatch(action.updateCurrentEventEndTime(endTime)),
		updateCurrentEventStartTime: startTime =>
			dispatch(action.updateCurrentEventStartTime(startTime)),
		clearCurrentEvent: () => dispatch(action.clearCurrentEvent()),
		setCurrentEvent: event => dispatch(action.setCurrentEvent(event))
	})
);

export { withCurrentEvent };
