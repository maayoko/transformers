import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Toolbar.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Toolbar = ({ style }) => {

    return (
        <div style={style} className={styles.root}>
            <Link to="/transformers/add" className={styles.link_wrapper}>
                <span className={styles.add_icon} />
                <Typography bold size="body-small" color="white">Add new</Typography>
            </Link>
            <Link to="/transformers/search" className={styles.link_wrapper}>
                <span className={styles.search_icon} />
                <Typography bold size="body-small" color="white">Search</Typography>
            </Link>
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