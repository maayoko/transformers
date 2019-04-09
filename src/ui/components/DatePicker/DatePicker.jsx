import React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import styles from "./DatePicker.module.scss";

class CustomInput extends React.Component {
	render() {
		const { value, onClick, className, ...other } = this.props;
		return <Input value={value} onChange={onClick} autoCompleted={false} {...other} />;
	}
}

const DatePicker = ({ selected, onChange, placeholder, useCustomInput, ...other }) => (
	<div className={styles.root}>
		<ReactDatePicker
			customInput={useCustomInput && <CustomInput />}
			placeholder={placeholder}
			selected={selected}
			onChange={onChange}
			calendarClassName={styles["react-datepicker__day"]}
			{...other}
		/>
	</div>
);

DatePicker.propTypes = {
	onChange: PropTypes.func,
	selected: PropTypes.any,
	placeholder: PropTypes.string,
	useCustomInput: PropTypes.bool
};
DatePicker.defaultProps = {
	onChange: () => {},
	placeholder: "",
	useCustomInput: false
};

export default DatePicker;
