import React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import Input from "../Input/Input";

class CustomInput extends React.Component {
	render() {
		const { value, onClick, ...other } = this.props;
		return <Input value={value} onChange={onClick} {...other} />;
	}
}

const DatePicker = ({ selected, onChange, placeholder, useCustomInput, ...other }) => (
	<ReactDatePicker
		customInput={useCustomInput && <CustomInput />}
		placeholder={placeholder}
		selected={selected}
		onChange={onChange}
		{...other}
	/>
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
