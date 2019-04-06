import Base from "./Base";

class Event extends Base {
	constructor(title, startTime, endTime, startDate, endDate, id) {
		super();
		this.title = title;
		this.startTime = startTime;
		this.endTime = endTime;
		this.startDate = startDate;
		this.endDate = endDate;
		this.id = id;
	}
}

export default Event;
