import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import Icon from '../Icon/Icon';

const defaultClassName = '';

const Arrow = ({
  className,
  icon,
  onClick,
  isDisabled,
  style,
}) => (
  <Icon
    style={style}
    icon={icon}
    className={`${className} ${isDisabled ? styles.disabled : defaultClassName}`}
    onClick={!isDisabled ? onClick : undefined}
  />
);

Arrow.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
};

Arrow.defaultProps = {
  className: null,
  onClick: () => {},
  style: {},
  isDisabled: false,
};

export default Arrow;
