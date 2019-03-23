/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  color,
  variant,
  className,
  isDisabled,
  children,
  position,
  onClick,
  fullWidth,
  style,
}) => {
  let clickHandler = onClick;
  let classNames = `${styles.button} ${styles[color]} ${styles[variant]} `;
  if (className) {
    classNames += ` ${className}`;
  }
  if (isDisabled) {
    classNames += ` ${styles.disabled}`;
    clickHandler = undefined;
  }
  if (fullWidth) {
    classNames += ` ${styles.fullWidth}`;
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div style={style} className={classNames} onClick={clickHandler}>
      <div className={`${styles.flex} ${styles[position]}`}>{children}</div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]).isRequired,
  color: PropTypes.oneOf(['default', 'primary']),
  isDisabled: PropTypes.bool,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  position: PropTypes.oneOf(['default', 'right', 'left']),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
};

Button.defaultProps = {
  className: null,
  color: 'default',
  variant: 'contained',
  position: 'default',
  fullWidth: false,
  isDisabled: false,
  onClick: () => {},
  style: {},
};

export default Button;
