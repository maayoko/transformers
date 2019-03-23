import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './Pricing.module.scss';
import PricingTable from './PricingTable';
import Icon from '../Icon/Icon';
import SuccessIcon from '../SuccessIcon/SuccessIcon';
import Input from '../Input/Input';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  @boundMethod
  toggleOpen() {
    this.setState(prev => ({
      open: !prev.open,
    }));
  }

  @boundMethod
  keyPressHandler(event) {
    if (event.which === 13 || event.keyCode === 13) {
      this.toggleOpen();
    }
    return true;
  }

  render() {
    const {
      className,
      items,
      totalClassName,
      totalLabel,
      isDiscountLoading,
      isDiscountSuccess,
      totalSuccessValue,
      discountLabel,
      onDiscountChange,
      inputValue,
    } = this.props;
    const { open } = this.state;
    return (
      <div className={`${styles.pricing_wrapper} ${className}`}>
        <div
          role="presentation"
          onClick={this.toggleOpen}
          onKeyDown={this.keyPressHandler}
          className={`${styles.discount} ${open ? styles.opened : styles.closed}`}
        >
          <div>{discountLabel}</div>
          <Icon icon="carousel-down" className={open ? styles.open : styles.closed} />
        </div>
        {
          open && (
          <Input
            onChange={onDiscountChange}
            className={styles.input}
            value={inputValue}
            sufixElement={(
              <SuccessIcon
                style={{ paddingRight: '5px' }}
                isLoading={isDiscountLoading}
                isSuccess={isDiscountSuccess}
              />
              )}
          />
          )
        }
        <PricingTable items={items} />
        <div className={`${styles.total_wrapper}`}>
          <div className={styles.label}>
            {totalLabel}
          </div>
          <div className={styles.value}>
            { isDiscountSuccess !== true
            && (
            <em>
              { items.find(item => typeof item.value === 'number' && item.currency).currency}
              &nbsp;
              {items.reduce((sum, item) => {
                if (typeof item.value === 'number') {
                  return sum + item.value;
                }
                return sum;
              }, 0)}
            </em>)
            }
            {
              isDiscountSuccess && <em className={totalClassName}>{ totalSuccessValue }</em>
            }
          </div>
        </div>
      </div>
    );
  }
}

Pricing.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currency: PropTypes.string,
  })).isRequired,
  isDiscountLoading: PropTypes.bool,
  isDiscountSuccess: PropTypes.bool,
  onDiscountChange: PropTypes.func,
  discountLabel: PropTypes.string,
  totalLabel: PropTypes.string,
  totalClassName: PropTypes.string,
  totalSuccessValue: PropTypes.string,
  inputValue: PropTypes.string,
};

Pricing.defaultProps = {
  className: null,
  isDiscountLoading: false,
  onDiscountChange: () => {},
  isDiscountSuccess: undefined,
  discountLabel: 'Have a discount?',
  totalLabel: 'Total',
  totalClassName: '',
  totalSuccessValue: 'Free',
  inputValue: '',
};

export default Pricing;
