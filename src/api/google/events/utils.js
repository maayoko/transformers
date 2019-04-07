import moment from "moment";

const getDate = dateTime => {
	return moment(dateTime).toDate();
};
const getStartDate = eventTime => {
	if (eventTime.dateTime) {
		return getDate(eventTime.dateTime);
	}

	// if date prop is not defined moment will take today's date
	return moment(eventTime.date)
		.startOf("day")
		.add(1, "hour")
		.toDate();
};

const getEndDate = eventTime => {
	if (eventTime.dateTime) {
		return getDate(eventTime.dateTime);
	}

	return moment(eventTime.date)
		.endOf("day")
		.toDate();
};

const getTimes = event => {
	const date = moment(event.startDate).format("YYYY-MM-DD");
	const start = moment(event.startTime).format("kk:mm");
	const end = moment(event.endTime).format("kk:mm");
	const startTime = moment(`${date} ${start}`).format();
	const endTime = moment(`${date} ${end}`).format();

	return { startTime, endTime };
};
export { getStartDate, getEndDate, getTimes };
