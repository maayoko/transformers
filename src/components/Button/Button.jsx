/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  variant,
  onClick,
  style,
  children,
}) => {
    console.log(style)

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // <div className={`${styles.outside}`}>
    //     <button 
    //         style={style} 
    //         onClick={onClick} 
    //         type={type} 
    //         className={`${styles.inside}`}>
    //         <span>{children}</span>
    //     </button>
    // </div>
    <div style={style} onClick={onClick}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="66" width="188">
            <g fill="none" className={styles.primary}>
                <path d="M2 63 H186 V3 L15 15 Z" />
                <text x="40" y="46" fill="black" className={`${styles.text}`}>{children}</text>
            </g>
        </svg>
    </div>
  );
};

Button.propTypes = {
    variant: PropTypes.oneOf([ "primary" ]),
    onClick: PropTypes.func,
    type: PropTypes.oneOf([ "button", "submit" ]),
    style: PropTypes.shape({})
};

Button.defaultProps = {
    variant: "primary",
    onClick: () => {},
    type: "button"
};

export default Button;
