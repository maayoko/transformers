import React from "react";
import PropTypes from "prop-types";
import styles from "./RobotPreview.module.scss";
import Typography from "../Typography/Typography";

const RobotPreview = ({
    imageSrc,
    name,
    faction,
    style,
    ...other
}) => {

    return (
        <div {...other} style={style} className={styles.root}>
            <img className={styles.image} src={imageSrc} alt={name} />
            <div className={styles.info}>
                <Typography uppercase size="body-big" color="white">{name}</Typography>
                <Typography size="body-mid" color="grey">{faction}</Typography>
            </div>
        </div>
    );
}

RobotPreview.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    faction: PropTypes.string.isRequired,
    style: PropTypes.shape({})
};
RobotPreview.defaultTypes = {
    style: {}
};

export default RobotPreview;