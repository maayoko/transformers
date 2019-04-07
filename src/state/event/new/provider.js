import { connect } from "react-redux";
import * as action from "./actionCreators";
import { getNewEvent } from "./selectors";

const withNewEvent = connect(
	state => ({
		newEvent: getNewEvent(state)
	}),
	dispatch => ({
		updateNewEventTitle: title => dispatch(action.updateNewEventTitle(title)),
		updateNewEventDate: date => dispatch(action.updateNewEventDate(date)),
		updateNewEventEndTime: endTime => dispatch(action.updateNewEventEndTime(endTime)),
		updateNewEventStartTime: startTime => dispatch(action.updateNewEventStartTime(startTime)),
		clearNewEvent: () => dispatch(action.clearNewEvent()),
		createNewEvent: event => dispatch(action.createNewEvent(event))
	})
);

export { withNewEvent };
