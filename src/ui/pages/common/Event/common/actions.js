const actions = (actions, event) => {
	const onTitleChange = e => {
		actions.updateEventTitle(e.target.value);
	};

	const onDateChange = date => {
		actions.updateEventDate(date);
	};

	const onStartTimeChange = time => {
		actions.updateEventStartTime(time);
	};

	const onEndTimeChange = time => {
		actions.updateEventEndTime(time);
	};

	const onSubmit = () => {
		actions.submitEvent(event);
	};

	return {
		onTitleChange,
		onDateChange,
		onStartTimeChange,
		onEndTimeChange,
		onSubmit
	};
};

export default actions;
