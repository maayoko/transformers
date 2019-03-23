import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

const Icon = ({
  className,
  icon,
  flag,
  onClick,
  style,
}) => {
  let classNameValue = '';
  if (className) {
    classNameValue = `${classNameValue} ${className}`;
  }
  if (icon) {
    classNameValue = `${classNameValue} ${styles.icon} ${styles[`icon-${icon}`]}`;
  }
  if (flag) {
    classNameValue = `${classNameValue} ${styles['flag-icon']} ${styles[`flag-icon-${flag}`]}`;
  }
  return <div onClick={onClick} style={style} className={classNameValue} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  flag: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
};

Icon.defaultProps = {
  className: null,
  onClick: () => {},
  style: {},
  icon: null,
  flag: null,
};

export default Icon;
