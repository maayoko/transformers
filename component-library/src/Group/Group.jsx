import React from 'react';
import PropTypes from 'prop-types';
import styles from './Group.module.scss';

const defaultClassName = '';

const Group = ({
  canBeFocused,
  className,
  children,
  removeGap,
  stretchContent,
  isVertical,
  centerContent,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  fullWidth,
  refFunc,
  style,
}) => (
  <div
    tabIndex={canBeFocused ? '-1' : undefined}
    onKeyDown={onKeyDown}
    onBlur={onBlur}
    onClick={onClick}
    style={style}
    onFocus={onFocus}
    role="presentation"
    ref={refFunc}
    className={`${styles.group}
    ${className}
    ${removeGap ? styles.nogap : defaultClassName}
    ${stretchContent ? styles.stretch : defaultClassName}
    ${centerContent ? styles.center : defaultClassName}
    ${isVertical ? styles.vertical : defaultClassName}
    ${fullWidth ? styles.fullWidth : defaultClassName}`}
  >
    { children }
  </div>
);

Group.propTypes = {
  canBeFocused: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]).isRequired,
  removeGap: PropTypes.bool,
  stretchContent: PropTypes.bool,
  centerContent: PropTypes.bool,
  isVertical: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  refFunc: PropTypes.func,
  style: PropTypes.shape({}),
};

Group.defaultProps = {
  canBeFocused: true,
  className: null,
  removeGap: false,
  stretchContent: false,
  centerContent: false,
  isVertical: false,
  fullWidth: false,
  onFocus: () => {},
  onBlur: () => {},
  onClick: () => {},
  onKeyDown: () => {},
  refFunc: () => {},
  style: {},
};

export default Group;
