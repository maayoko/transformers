import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pricing.module.scss';

const PricingTable = ({
  className,
  items,
}) => (
  <div className={`${styles.pricing_wrapper} ${className}`}>
    {
      items.map(item => (
        <div className={styles.item_wrapper} key={item.label}>
          <div className={styles.label}>
            {item.label}
          </div>
          <div className={styles.value}>
            <em>
              { typeof item.value === 'number' && item.currency}
              &nbsp;
              {item.value}
            </em>
          </div>
        </div>
      ))
    }
  </div>
);

PricingTable.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currency: PropTypes.string,
  })).isRequired,
};

PricingTable.defaultProps = {
  className: null,
};

export default PricingTable;
