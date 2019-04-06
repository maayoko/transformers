import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Group from "../../../components/Group/Group";
import FormGroup from "../../../components/FormGroup/FormGroup";
import Label from "../../../components/Label/Label";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const CurrentEvent = ({
	currentEvent,
	onTitleChange,
	onDateChange,
	onStartTimeChange,
	onEndTimeChange,
	updateEvent
}) => (
	<Group vertical>
		<FormGroup>
			<Label htmlFor="title">Title</Label>
			<Input id="title" onChange={onTitleChange} value={currentEvent.title} />
		</FormGroup>
		<FormGroup>
			<Label htmlFor="date">Date</Label>
			<Input
				id="date"
				onChange={onDateChange}
				value={moment(currentEvent.startDate).format("DD.MM.YYYY.")}
			/>
		</FormGroup>
		<FormGroup>
			<Label htmlFor="start_time">Start time</Label>
			<Input id="start_time" onChange={onStartTimeChange} value={currentEvent.startTime} />
		</FormGroup>
		<FormGroup>
			<Label htmlFor="end_time">End time</Label>
			<Input id="end_time" onChange={onEndTimeChange} value={currentEvent.endTime} />
		</FormGroup>
		<Button variant="primary" onClick={updateEvent}>
			Update event
		</Button>
	</Group>
);

CurrentEvent.propTypes = {
	currentEvent: PropTypes.shape({
		title: PropTypes.string,
		startDate: PropTypes.oneOf([PropTypes.string, PropTypes.shape({})]),
		startTime: PropTypes.oneOf([PropTypes.string, PropTypes.shape({})]),
		endTime: PropTypes.oneOf([PropTypes.string, PropTypes.shape({})])
	}).isRequired,
	onTitleChange: PropTypes.func,
	onDateChange: PropTypes.func,
	onStartTimeChange: PropTypes.func,
	onEndTimeChange: PropTypes.func,
	updateEvent: PropTypes.func
};

CurrentEvent.defaultProps = {
	onTitleChange: () => {},
	onDateChange: () => {},
	onStartTimeChange: () => {},
	onEndTimeChange: () => {},
	updateEvent: () => {}
};

export default CurrentEvent;
