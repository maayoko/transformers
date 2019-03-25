import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({
    placeholder
}) => {

    return <input className={styles.root} type="text" placeholder={placeholder} />
}

Input.propTypes = {
    placeholder: PropTypes.string
}

Input.defaultProps = {
    placeholder: ""
}

export default Input;