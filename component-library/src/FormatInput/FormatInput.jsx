/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './FormatInput.module.scss';
import Group from '../Group/Group';
import Icon from '../Icon/Icon';

class FormatInput extends React.Component {
  @boundMethod
  onChange(e) {
    const { onChange, format } = this.props;
    const startingValue = this.applyFormat(format, e.target.value).replace(/[^0-9]/g, '');
    onChange(startingValue);
  }

  @boundMethod
  setRef(refElement) {
    const { refFunc } = this.props;
    this.input = refElement;
    if (refFunc) {
      refFunc(refElement);
    }
  }


  @boundMethod
  // eslint-disable-next-line class-methods-use-this
  applyFormat(format, value) {
    if (!value) return '';
    const startingValue = value.replace(/[^0-9]/g, '').split('');
    const { position } = format.split('').reduce((accumulator, currentValue, index) => {
      if (accumulator.index < startingValue.length && currentValue === '#') {
        accumulator.index += 1;
        accumulator.position = index + 1;
        return accumulator;
      }
      return accumulator;
    }, { index: 0, position: 0 });
    let result = format.substring(0, position);
    startingValue.forEach((char) => {
      result = result.replace('#', char);
    });
    result = result.replace(/#/g, '');
    return result;
  }

  @boundMethod
  focusOnInputClick() {
    const { enableFocus } = this.props;
    if (this.input && enableFocus) {
      this.input.focus();
    }
  }


  render() {
    const {
      onClick,
      onSelect,
      onFocus,
      onBlur,
      onKeyDown,
      icon,
      label,
      type,
      hasError,
      placeholder,
      readOnly,
      isDisabled,
      name,
      prefixElement,
      sufixElement,
      isFocused,
      value, format,
    } = this.props;
    console.log(value);
    // eslint-disable-next-line react/destructuring-assignment
    let className = `${this.props.className}`;
    if (isDisabled) {
      className += ` ${styles.disabled}`;
    }
    if (hasError) {
      className += ` ${styles.error}`;
    }
    if (isFocused) {
      className += ` ${styles.focused}`;
    }
    const displayValue = this.applyFormat(format, value);
    return (
      <Group removeGap className={`${styles['base-input-group']} ${className}`}>
        {
          // eslint-disable-next-line jsx-a11y/label-has-for
          label && (
          <label onClick={this.focusOnInputClick} htmlFor="name" className={styles.label}>
            {' '}
            {label}
            {' '}
          </label>)
        }
        <Group stretchContent onClick={this.focusOnInputClick} removeGap className={`${styles['input-group']} `}>
          {
            prefixElement
          }
          <input
            placeholder={placeholder}
            className={styles.input}
            ref={this.setRef}
            readOnly={readOnly}
            autoComplete="off"
            name={name}
            type={type}
            value={displayValue}
            onClick={onClick}
            onSelect={onSelect}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={this.onChange}
          />
          {
            icon && <Icon onClick={this.focusOnInputClick} className={styles.icon} icon={icon} />
          }
          {
            sufixElement
          }
        </Group>
      </Group>
    );
  }
}

FormatInput.propTypes = {
  className: PropTypes.string,
  enableFocus: PropTypes.bool,
  hasError: PropTypes.bool,
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  prefixElement: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]),
  readOnly: PropTypes.bool,
  refFunc: PropTypes.func,
  sufixElement: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]),
  value: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
};

FormatInput.defaultProps = {
  className: null,
  enableFocus: true,
  hasError: false,
  icon: null,
  isFocused: false,
  prefixElement: null,
  sufixElement: null,
  isDisabled: false,
  label: null,
  value: null,
  name: 'dummyinput',
  type: 'text',
  format: null,
  onBlur: () => { },
  onChange: () => { },
  onClick: () => { },
  onFocus: () => { },
  onSelect: () => { },
  onKeyDown: () => { },
  placeholder: null,
  readOnly: false,
  refFunc: () => { },
};

export default FormatInput;
