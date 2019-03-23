import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import FormatInput from '../FormatInput/FormatInput';


function isValid(paramMonth, paramYear) {
  const month = Number(paramMonth);
  const year = Number(paramYear);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (month < 1 || month > 12) {
    return false;
  }

  if (year === currentYear && month < currentMonth) {
    return false;
  }

  if (year < currentYear) {
    return false;
  }

  return true;
}

class CardExpieryInput extends Component {

  @boundMethod
  handleChange(newValue) {
    const { onChange } = this.props;
    onChange(newValue,
      newValue !== null && !isValid(newValue.substring(0, 2), newValue.substring(2, 6)));
  }
  
  @boundMethod
  handleBlur(event) {
    const { value, onBlur, onChange } = this.props;
    onBlur(event);
    if (value === null || !isValid(value.substring(0, 2), value.substring(2, 6))) {
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
      hasError,
      className,
      enableFocus,
    } = this.props;
    return (
      <FormatInput
        format="## / ####"
        hasError={hasError}
        onClick={onClick}
        onSelect={onSelect}
        onFocus={onFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={onKeyDown}
        label={label}
        type={type}
        placeholder="MM / YYYY"
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

CardExpieryInput.propTypes = {
  className: PropTypes.string,
  enableFocus: PropTypes.bool,
  hasError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  readOnly: PropTypes.bool,
  refFunc: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
};

CardExpieryInput.defaultProps = {
  className: null,
  enableFocus: true,
  isDisabled: false,
  hasError: false,
  label: null,
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

export default CardExpieryInput;
