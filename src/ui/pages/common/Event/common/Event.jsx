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
import styles from "./Event.module.scss";

const Event = ({
	event,
	onTitleChange,
	onDateChange,
	onStartTimeChange,
	onEndTimeChange,
	onSubmit,
	buttonLabel,
	className
}) => (
	<Group align="center" vertical className={`${styles.root} ${className}`}>
		<FormGroup className={styles.form_group}>
			<Label htmlFor="title">Title</Label>
			<Input
				placeholder="E.g. Destiny battle"
				id="title"
				onChange={onTitleChange}
				value={event.title}
			/>
		</FormGroup>
		<FormGroup className={styles.form_group}>
			<Label htmlFor="date">Date</Label>
			<DatePicker
				useCustomInput
				id="date"
				dateFormat="dd. MMMM, yyyy"
				onChange={onDateChange}
				selected={event.startDate}
				placeholderText="Select battle date..."
				autocomplete="off"
			/>
		</FormGroup>
		<FormGroup className={styles.form_group}>
			<Label htmlFor="start_time">Start time</Label>
			<DatePicker
				useCustomInput
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
		<FormGroup className={styles.form_group}>
			<Label htmlFor="end_time">End time</Label>
			<DatePicker
				useCustomInput={true}
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
	buttonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
	className: PropTypes.string
};
Event.defaultProps = {
	...defaultProps,
	buttonLabel: "Click me"
};

export default Event;
