/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { boundMethod } from 'autobind-decorator';
import styles from './DatePicker.module.scss';
import Input from '../Input/Input';
import './DatePicker.scss';


class DatePicker extends React.Component {
  @boundMethod
  onSelect(selectedDate) {
    const { onSelect } = this.props;
    onSelect(selectedDate);
    if (this.input) {
      this.input.blur();
    }
  }

  @boundMethod
  setRef(refElement) {
    const { refFunc } = this.props;
    this.input = refElement;
    if (refFunc) {
      refFunc(refElement);
    }
  }

  render() {
    const {
      onFocus,
      onBlur,
      readOnly,
      hasError,
      isDisabled,
      placeholder,
      name,
      label,
      className,
      selected,
    } = this.props;
    return (
      <ReactDatePicker
        dateFormat="MMM dd yyyy"
        customInput={<Input
          name={name}
          type="text"
          onBlur={onBlur}
          onFocus={onFocus}
          isDisabled={isDisabled}
          hasError={hasError}
          value={selected ? selected.toDateString() : null}
          className={className}
          label={label || "date"} // TODO CHANGE
          icon="calendar"
          refFunc={this.setRef}
        />}
        placeholderText={placeholder}
        customInputRef="input"
        minDate={new Date()}
        readOnly={readOnly}
        disabled={isDisabled}
        selected={selected}
        onSelect={this.onSelect}
        onKeyDown={this.onKeyDown}
        popperClassName={styles.popper}
        popperPlacement="bottom"
        popperModifiers={{
          flip: {
            behavior: ['bottom'], // don't allow it to flip to be above
          },
          preventOverflow: {
            enabled: false,
          },
          hide: {
            enabled: false, // turn off since needs preventOverflow to be enabled
          },
        }}
      />
    );
  }
}

DatePicker.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.instanceOf(Date),
  hasError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  refFunc: PropTypes.func,
};

DatePicker.defaultProps = {
  className: null,
  label: null,
  hasError: false,
  selected: null,
  isDisabled: false,
  name: 'dummyinput',
  onBlur: () => {},
  onChange: () => {},
  onClick: () => {},
  onFocus: () => {},
  onSelect: () => {},
  placeholder: null,
  readOnly: false,
  refFunc: () => {},
};

export default DatePicker;
