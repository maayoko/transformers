import React, { Component } from 'react';
import { boundMethod } from 'autobind-decorator';
import PropTypes from 'prop-types';
import FormatInput from '../FormatInput/FormatInput';
import styles from './CardNumberInput.module.scss';

const CREDIT_CARD_LIST = [
  {
    name: 'amex',
    regexpFull: /^3[47][0-9]{13}$/,
  },
  {
    name: 'mastercard',
    regexpFull: /^(5[1-5][0-9]{14}|2221[0-9]{12}|222[2-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{13}|2720[0-9]{12})$/,
  },
  {
    name: 'visa',
    regexpFull: /^4[0-9]{12}(?:[0-9]{3})?$/,
  },
];

function getCreditCardNameByNumber(number) {
  for (let i = 0; i < CREDIT_CARD_LIST.length; i += 1) {
    const creditcard = CREDIT_CARD_LIST[i];
    if (creditcard.regexpFull.test(number)) { return creditcard.name; }
  }

  return null;
}


class CardNumberInput extends Component {
  @boundMethod
  handleChange(newValue) {
    const { onChange } = this.props;
    onChange(newValue, newValue !== null && getCreditCardNameByNumber(newValue) === null);
  }

  @boundMethod
  handleBlur(event) {
    const { value, onBlur, onChange } = this.props;
    onBlur(event);
    if (value === null || getCreditCardNameByNumber(value) === null) {
      onChange(value, true);
    }
  }

  render() {
    const {
      onClick,
      onSelect,
      onFocus,
      onKeyDown,
      label,
      type,
      readOnly,
      isDisabled,
      name,
      value,
      refFunc,
      className,
      enableFocus,
      hasError,
    } = this.props;
    const card = getCreditCardNameByNumber(value) || 'card';
    const classNameValue = `${styles['card-icon']} ${styles[`card-icon-${card}`]}`;
    return (
      <FormatInput
        format="#### #### #### ####"
        hasError={hasError}
        sufixElement={
          <div className={classNameValue} />
        }
        onClick={onClick}
        onSelect={onSelect}
        onFocus={onFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={onKeyDown}
        label={label}
        type={type}
        placeholder="0000 0000 0000 0000"
        readOnly={readOnly}
        isDisabled={isDisabled}
        name={name}
        value={value}
        className={className}
        enableFocus={enableFocus}
        refFunc={refFunc}
      />
    );
  }
}


CardNumberInput.propTypes = {
  className: PropTypes.string,
  enableFocus: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  readOnly: PropTypes.bool,
  refFunc: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
};

CardNumberInput.defaultProps = {
  className: null,
  enableFocus: true,
  isDisabled: false,
  label: null,
  hasError: false,
  value: null,
  name: 'dummyinput',
  type: 'text',
  onBlur: () => { },
  onChange: () => { },
  onClick: () => { },
  onFocus: () => { },
  onSelect: () => { },
  onKeyDown: () => { },
  readOnly: false,
  refFunc: () => { },
};

export default CardNumberInput;
