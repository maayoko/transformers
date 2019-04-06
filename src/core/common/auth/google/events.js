import { getLoader } from "./loader";
import { getInstance as getAuthInstance } from "./auth";

class Events {
	_loader = getLoader();
	_events = this._loader.gapi.client.calendar.events;

	isAuthorized = () => {
		console.log(getAuthInstance().getAuhtInstance());
	};

	getEvents = options => {
		return this._events.list(options);
	};
}

const getInstance = () => {
	return new Events();
};

export { getInstance };
export default Events;
