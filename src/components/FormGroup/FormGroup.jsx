import React from "react";
import styles from "./FormGroup.module.scss";

const FormGroup = ({
    children
}) => {

    return (
        <div className={styles.root}>
            {children}
        </div>
    );
}

FormGroup.propTypes = {
};

FormGroup.defaultProps = {
};

export default FormGroup;