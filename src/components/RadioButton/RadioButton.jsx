import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import styles from "./RadioButton.module.scss";

const RadioButton = ({
    label,
    name,
    onChange
}) => {

    return (
        <div className={styles.root}>
            <input onChange={onChange} name={name} className={styles.input} type="radio" />
            <span className={styles.radio_mark}></span>
            <Typography size="body-mid" color="white">{label}</Typography>
        </div>
    );
}

RadioButton.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    onChange: PropTypes.func
};
RadioButton.defaultProp = {
    onChange: () => {}
};

export default RadioButton;