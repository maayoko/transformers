import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './LabeledIcon.module.scss';

const defaultClassName = '';

const LabeledIcon = ({
  className,
  label,
  icon,
  flag,
  isReverse,
  onClick,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div onClick={onClick} className={`${styles['labeled-icon']} ${className}  ${isReverse ? styles.reverse : defaultClassName}`}>
    <span className={styles['labeled-icon__label']}>{label}</span>
    <Icon icon={icon} flag={flag} className={styles['labeled-icon__icon']} />
  </div>
);

LabeledIcon.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.string,
  flag: PropTypes.string,
  isReverse: PropTypes.bool,
  onClick: PropTypes.func,
};

LabeledIcon.defaultProps = {
  className: null,
  isReverse: false,
  onClick: () => {},
  icon: null,
  flag: null,
};

export default LabeledIcon;
