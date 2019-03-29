import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.scss";
import classNames from "classnames";

const Select = ({
    options,
    onChange,
    id,
    placeholder,
    width
}) => {

    const classes = classNames(
        styles.root,
        { [styles.placeholder]: placeholder },
        styles[width]
    );

    return (
        <select 
            id={id} 
            name={id} 
            className={classes} 
            onChange={onChange}>
            {
                options.map((option, idx) => {
                    return <option key={idx}>{option}</option>;
                })
            }
        </select>
    );
}

Select.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.oneOf([ "small", "normal" ])
};
Select.defaultProp = {
    width: "normal"
};

export default Select;