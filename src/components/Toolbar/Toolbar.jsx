import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Toolbar.module.scss";
import AddIcon from "../../assets/images/svg/add_icon.svg";
import PropTypes from "prop-types";

const Toolbar = ({ style }) => {

    return (
        <div style={style} className={styles.root}>
            <div className={styles.link_wrapper}>
                <span className={styles.add_icon} />
                <Typography bold size="body-small" color="white">Add new</Typography>
            </div>
            <div className={styles.link_wrapper}>
                <span className={styles.search_icon} />
                <Typography bold size="body-small" color="white">Search</Typography>
            </div>
        </div>
    );
}

Toolbar.propTypes = {
    style: PropTypes.shape({})
};
Toolbar.defaultProps = {
    style: {}
};

export default Toolbar;