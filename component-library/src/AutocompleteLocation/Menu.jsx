import React from 'react';
import PropTypes from 'prop-types';
import styles from './Autocomplete.module.scss';
import Loader from '../Loader/Loader';

const Menu = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  isLoading,
  noElementsLabel,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`${styles.menu} ${className}`}
  >
    {!isLoading && children}
    {!isLoading && children.length === 0
    && <div className={`${styles.noElements}`}>{noElementsLabel}</div>}
    {isLoading && <Loader className={styles.loader} />}
  </div>
);

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]).isRequired,
  noElementsLabel: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isLoading: PropTypes.bool,
};

Menu.defaultProps = {
  className: '',
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  isLoading: false,
};

export default Menu;
