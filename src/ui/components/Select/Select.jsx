import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.scss";
import classNames from "classnames";

const Select = ({ options, onChange, id, placeholder, width, selected, ...other }) => {
	const classes = classNames(styles.root, { [styles.placeholder]: placeholder }, styles[width]);

	return (
		<select id={id} name={id} className={classes} onChange={onChange} {...other}>
			{options.map((option, idx) => {
				return (
					<option
						value={option.value}
						key={idx}
						selected={selected && selected === option}>
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
	selected: PropTypes.any
};
Select.defaultProp = {
	width: "normal"
};

export default Select;
