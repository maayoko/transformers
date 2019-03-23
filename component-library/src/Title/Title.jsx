import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({
  className,
  title,
  subtitle,
  type,
  style,
  isDisabled,
}) => {
  let classNameValue = `${styles.title_container} ${className} ${styles[type]}`;
  if (isDisabled) {
    classNameValue = `${classNameValue} ${styles.disabled}`;
  }
  return (
    <div style={style} className={classNameValue}>
      <div>{title}</div>
      {subtitle && (
      <div>
        {' '}
        {subtitle}
        {' '}
      </div>
      )}
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  isDisabled: PropTypes.bool,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf(['basic', 'display', 'header5', 'header1', 'priceLarge', 'body']),
};

Title.defaultProps = {
  className: null,
  type: 'basic',
  subtitle: null,
  style: null,
  isDisabled: false,
};

export default Title;
