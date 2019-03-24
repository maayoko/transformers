/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const Logo = ({
    color,
    variant,
    size,
    children,
}) => {
    
    if (variant === "text") {
        return (
            <div className={`${styles[size]} ${styles[color]}`}>
                <span>{children}</span>
            </div>
        );
    }
}

Logo.propTypes = {
    color: PropTypes.oneOf([ "black", "primary" ]).isRequired,
    style: PropTypes.shape({}),
    variant: PropTypes.oneOf([ "text", "image" ]).isRequired,
    size: PropTypes.oneOf([ "big", "small" ]).isRequired
};

Logo.defaultProps = {
    variant: "text"
};

export default Logo;
