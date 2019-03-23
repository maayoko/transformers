/* eslint-disable operator-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Selection.module.scss';
import Group from '../Group/Group';

const defaultClass = '';

const Selection = ({
  className,
  isActive,
  onClick,
  selection,
  onKeyDown,
  isDisabled,
  type,
}) => (
  <Group centerContent className={`${styles.container} ${className} ${!isDisabled ? defaultClass : styles.disabled}`}>
    {
      !isActive && type === 'checkbox' && (
      <div
        role="presentation"
        onClick={!isDisabled ? onClick : undefined}
        onKeyDown={!isDisabled ? onKeyDown : undefined}
        className={styles.empty}
      />
      )
    }
    {
      isActive && type === 'checkbox' && (
      <svg onClick={!isDisabled ? onClick : undefined} onKeyDown={!isDisabled ? onKeyDown : undefined} className={`${styles.active}`} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0H19C20.1046 0 21 0.895431 21 2V19C21 20.1046 20.1046 21 19 21H2C0.895431 21 0 20.1046 0 19V2Z" fill="#6CE3FE" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15.3736 6.93484C14.8762 6.43871 14.0703 6.43871 13.5729 6.93484L9.1852 11.3225L7.42252 9.55984C6.92508 9.06371 6.12052 9.06371 5.62308 9.55984C5.12564 10.0573 5.12564 10.8632 5.62308 11.3606L8.09977 13.8373C8.14833 13.9134 8.18245 13.9948 8.24808 14.0604C8.50664 14.3177 8.84658 14.4345 9.1852 14.4266C9.52383 14.4345 9.86508 14.3177 10.1236 14.0604C10.188 13.9948 10.2221 13.9134 10.2706 13.8373L15.3736 8.73559C15.8698 8.23815 15.8698 7.43228 15.3736 6.93484Z" fill="white" />
      </svg>
      )
    }
    {
      !isActive && type === 'radio' && (
      <div
        role="presentation"
        onClick={!isDisabled ? onClick : undefined}
        onKeyDown={!isDisabled ? onKeyDown : undefined}
        className={styles.empty_radio}
      />
      )
    }
    {
      isActive && type === 'radio' && (
      <svg onClick={!isDisabled ? onClick : undefined} onKeyDown={!isDisabled ? onKeyDown : undefined} className={`${styles.active}`} width="21" height="21" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" fill="white" stroke="#52DCFC" strokeWidth="2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13Z" fill="#52DCFC" />

      </svg>
      )
    }
    {
      selection
    }
  </Group>
);

Selection.propTypes = {
  className: PropTypes.string,
  selection: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

Selection.defaultProps = {
  className: null,
  isDisabled: false,
  isActive: false,
  onClick: () => {},
  onKeyDown: () => {},
  type: 'checkbox',
};

export default Selection;
