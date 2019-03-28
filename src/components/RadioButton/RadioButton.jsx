import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label, name, checked, onChange }) => {
	const inputRef = useRef();

	useEffect(() => {
		if (inputRef.current.checked !== checked) {
			inputRef.current.checked = checked;
		}
	}, [checked]);

	return (
		<div className={styles.root}>
			<input
				ref={inputRef}
				onChange={onChange}
				name={name}
				className={styles.input}
				type="radio"
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
	checked: PropTypes.bool
};
RadioButton.defaultProps = {
	onChange: () => {},
	checked: false
};

export default RadioButton;
