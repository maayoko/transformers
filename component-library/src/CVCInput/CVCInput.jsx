import React, { Component } from 'react';
import { boundMethod } from 'autobind-decorator';
import PropTypes from 'prop-types';
import FormatInput from '../FormatInput/FormatInput';
import styles from './CVCInput.module.scss';


class CVCInput extends Component {
  @boundMethod
  handleBlur(event) {
    const { value, onBlur, onChange } = this.props;
    onBlur(event);
    if (value === null || value.length < 3) {
      onChange(value, true);
    }
  }

  @boundMethod
  handleChange(newValue) {
    const { onChange } = this.props;
    onChange(newValue,
      newValue !== null && newValue.length < 3);
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
      hasError,
      enableFocus,
    } = this.props;
    const classNameValue = `${styles['card-icon']} ${styles['card-icon-info']}`;
    return (
      <FormatInput
        format="####"
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
        placeholder="123"
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

CVCInput.propTypes = {
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

CVCInput.defaultProps = {
  className: null,
  enableFocus: true,
  hasError: false,
  isDisabled: false,
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

export default CVCInput;
