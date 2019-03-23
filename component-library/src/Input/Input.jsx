/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './Input.module.scss';
import Group from '../Group/Group';
import Icon from '../Icon/Icon';

class Input extends React.Component {
  @boundMethod
  setRef(refElement) {
    const { refFunc } = this.props;
    this.input = refElement;
    if (refFunc) {
      refFunc(refElement);
    }
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
      onChange,
      onKeyDown,
      icon,
      label,
      type,
      hasError,
      placeholder,
      readOnly,
      isDisabled,
      name,
      value,
      prefixElement,
      sufixElement,
      isFocused,
    } = this.props;
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
    return (
      <Group removeGap className={`${styles['base-input-group']} ${className}`}>
        {
          // eslint-disable-next-line jsx-a11y/label-has-for
          label && <label onClick={this.focusOnInputClick} htmlFor="name" className={styles.label}> {label} </label>
        }
        <Group onClick={this.focusOnInputClick} removeGap className={`${styles['input-group']} `}>
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
            value={value}
            onClick={onClick}
            onSelect={onSelect}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
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

Input.propTypes = {
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
};

Input.defaultProps = {
  className: null,
  enableFocus: true,
  hasError: false,
  icon: null,
  isFocused: false,
  prefixElement: null,
  sufixElement: null,
  isDisabled: false,
  label: null,
  value: '',
  name: 'dummyinput',
  type: 'text',
  onBlur: () => {},
  onChange: () => {},
  onClick: () => {},
  onFocus: () => {},
  onSelect: () => {},
  onKeyDown: () => {},
  placeholder: null,
  readOnly: false,
  refFunc: () => {},
};

export default Input;
