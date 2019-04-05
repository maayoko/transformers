import { getLoader } from "./loader";
import { getInstance } from "./auth";

class Calendar {
	_loader = getLoader();
	_events = this._loader.gapi.calendar.events;

	isAuthorized = () => {
		console.log(getInstance().getAuhtInstance());
	};

	getEvents = options => {
		return this._events.list(options);
	};
}

const getInstance = () => {
	return new Calendar();
};

export { getInstance };
export default Calendar;
