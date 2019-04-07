import React from "react";
import PropTypes from "prop-types";
import Group from "../../../../components/Group/Group";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import Label from "../../../../components/Label/Label";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import propTypes from "./types";
import defaultProps from "./defaultProps";
import DatePicker from "../../../../components/DatePicker";

const Event = ({
	event,
	onTitleChange,
	onDateChange,
	onStartTimeChange,
	onEndTimeChange,
	onSubmit,
	buttonLabel
}) => (
	<Group vertical>
		<FormGroup>
			<Label htmlFor="title">Title</Label>
			<Input
				placeholder="E.g. Destiny battle"
				id="title"
				onChange={onTitleChange}
				value={event.title}
			/>
		</FormGroup>
		<FormGroup>
			<Label htmlFor="date">Date</Label>
			<DatePicker
				id="date"
				dateFormat="dd. MMMM, yyyy"
				onChange={onDateChange}
				selected={event.startDate}
				placeholderText="Select battle date..."
			/>
		</FormGroup>
		<FormGroup>
			<Label htmlFor="start_time">Start time</Label>
			<DatePicker
				id="start_time"
				onChange={onStartTimeChange}
				selected={event.startTime}
				showTimeSelect
				showTimeSelectOnly
				timeIntervals={15}
				dateFormat="HH:mm"
				timeFormat="HH:mm"
				timeCaption="Time"
				placeholderText="Select battle start time..."
			/>
		</FormGroup>
		<FormGroup>
			<Label htmlFor="end_time">End time</Label>
			<DatePicker
				id="end_time"
				onChange={onEndTimeChange}
				selected={event.endTime}
				showTimeSelect
				showTimeSelectOnly
				timeIntervals={15}
				dateFormat="HH:mm"
				timeFormat="HH:mm"
				timeCaption="Time"
				placeholderText="Select battle end time..."
			/>
		</FormGroup>
		<Button variant="primary" onClick={onSubmit}>
			{buttonLabel}
		</Button>
	</Group>
);

Event.propTypes = {
	...propTypes,
	buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node])
};
Event.defaultProps = {
	...defaultProps,
	buttonLabel: "Click me"
};

export default Event;
