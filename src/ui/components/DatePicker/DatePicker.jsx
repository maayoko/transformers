import React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";

const DatePicker = ({ selected, onChange, placeholder, ...other }) => (
	<ReactDatePicker placeholder={placeholder} selected={selected} onChange={onChange} {...other} />
);

DatePicker.propTypes = {
	onChange: PropTypes.func,
	selected: PropTypes.any,
	placeholder: PropTypes.string
};
DatePicker.defaultProps = {
	onChange: () => {},
	placeholder: ""
};

export default DatePicker;
