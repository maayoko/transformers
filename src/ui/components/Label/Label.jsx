import React from "react";
import Typography from "../Typography/Typography";

const Label = ({
    htmlFor,
    children
}) => {

    return (
        <label htmlFor={htmlFor}>
            <Typography size="body-big" color="white">{children}</Typography>
        </label>
    );
}

Label.propTypes = {};

Label.defaultProps = {};

export default Label;