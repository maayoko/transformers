import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.scss';

const Loader = ({
  className,
}) => (
  <div className={`${styles.loader} ${className}`}>
    <svg className={styles.circular} viewBox="25 25 50 50">
      <circle className={styles.path} cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
      <circle className={styles.path2} cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
    </svg>
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: null,
};

export default Loader;
