import Base from "./Base";

class Event extends Base {
	constructor(title, startTime, endTime, startDate, endDate) {
		super();
		this.title = title;
		this.startDate = startTime;
		this.endTime = endTime;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}

export default Event;
