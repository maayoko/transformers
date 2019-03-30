import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label, name, checked, onChange, value, ...other }) => {
	const inputRef = useRef();

	useEffect(() => {
		if (inputRef.current.checked !== checked) {
			inputRef.current.checked = checked;
		}
	}, [checked]);

	return (
		<div className={styles.root} {...other}>
			<input
				ref={inputRef}
				onChange={onChange}
				name={name}
				className={styles.input}
				type="radio"
				value={value}
			/>
			<span className={styles.radio_mark} />
			<Typography size="body-mid" color="white">
				{label}
			</Typography>
		</div>
	);
};

RadioButton.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
	value: PropTypes.any
};
RadioButton.defaultProps = {
	onChange: () => {},
	checked: false,
	value: ""
};

export default RadioButton;
