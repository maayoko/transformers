import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.scss";
import classNames from "classnames";

const Select = ({ options, onChange, id, placeholder, width, selected, disabled, ...other }) => {
	const classes = classNames(
		styles.root,
		{ [styles.placeholder]: placeholder },
		{ [styles.disabled]: disabled },
		styles[width]
	);

	return (
		<select
			disabled={disabled}
			id={id}
			name={id}
			defaultValue={selected && selected.value}
			className={classes}
			onChange={onChange}
			{...other}>
			{options.map((option, idx) => {
				return (
					<option value={option.value} key={idx}>
						{option.label}
					</option>
				);
			})}
		</select>
	);
};

Select.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.any,
			label: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.func,
				PropTypes.node,
				PropTypes.number
			])
		})
	).isRequired,
	onChange: PropTypes.func.isRequired,
	width: PropTypes.oneOf(["small", "normal"]),
	selected: PropTypes.any,
	disabled: PropTypes.bool
};
Select.defaultProp = {
	width: "normal",
	disabled: false
};

export default Select;
