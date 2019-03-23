import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({
  className,
  children,
  style,
  canBeTogether,
}) => (
  <div style={style} className={`${canBeTogether ? styles.card : styles.distinct_card} ${className}`}>
    <div className={styles.card__content}>
      {children}
    </div>
    <svg className={styles.line_vertical} viewBox="0 0 2 271" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1V270" stroke="#EFEFEF" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10" />
    </svg>
    <svg className={styles.line_horizontal} viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.00002L300 0.999981" stroke="#EFEFEF" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10" />
    </svg>

  </div>
);

Card.propTypes = {
  canBeTogether: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]).isRequired,
  style: PropTypes.shape({}),
};

Card.defaultProps = {
  canBeTogether: true,
  className: null,
  style: {},
};

export default Card;
