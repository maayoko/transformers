import { connect } from "react-redux";
import * as action from "./actionCreators";
import { getEvents } from "./selectors";

const withEvents = connect(
	state => ({
		events: getEvents(state)
	}),
	dispatch => ({
		getEvents: options => dispatch(action.getEvents(options)),
		deleteEvent: event => dispatch(action.deleteEvent(event))
	})
);

export { withEvents };
