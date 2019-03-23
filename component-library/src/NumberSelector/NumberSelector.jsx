/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './NumberSelector.module.scss';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Group from '../Group/Group';

const defaultClassName = 'ddd';

class NumberSelector extends React.Component {
  constructor(props) {
    super(props);
    const {
      nextGenerator,
      previousGenerator,
      allowDisable,
      value,
    } = props;
    this.state = {
      disableUp: false,
      disableDown: false,
    };

    if (allowDisable) {
      let newValue = nextGenerator(value);
      if (newValue === null) {
        this.state.disableUp = true;
      }
      newValue = previousGenerator(value);
      if (newValue === null) {
        this.state.disableDown = true;
      }
    }
  }

  @boundMethod
  changeValueUp() {
    const {
      nextGenerator,
      onChange,
      isDisabled,
      allowDisable,
      onFocus,
      value,
    } = this.props;
    if (onFocus) {
      onFocus();
    }
    const newValue = nextGenerator(value);
    if (!isDisabled) {
      if (newValue !== null) {
        this.setState({
          disableUp: nextGenerator(newValue) === null,
          disableDown: false,
        }, () => {
          onChange(newValue);
        });
      } else if (newValue === null && allowDisable) {
        this.setState({
          disableUp: true,
          disableDown: false,
        });
      }
    }
  }

  @boundMethod
  changeValueDown() {
    const {
      previousGenerator,
      onChange,
      isDisabled,
      allowDisable,
      onFocus,
      value,
    } = this.props;
    if (onFocus) {
      onFocus();
    }
    const newValue = previousGenerator(value);
    if (!isDisabled) {
      if (newValue !== null) {
        this.setState({
          disableUp: false,
          disableDown: previousGenerator(newValue) === null,
        }, () => {
          onChange(newValue);
        });
      } else if (newValue === null && allowDisable) {
        this.setState({
          disableUp: false,
          disableDown: true,
        });
      }
    }
  }

  render() {
    const {
      label,
      formatFunc,
      isDisabled,
      className,
      valueClassName,
      allowDisable,
      onBlur,
      onFocus,
      onClick,
      onKeyDown,
      refFunc,
      canBeFocused,
      value,
    } = this.props;
    const { disableUp, disableDown } = this.state;
    return (
      <Group
        canBeFocused={canBeFocused}
        className={`${styles.group} ${className} ${isDisabled ? styles.disabled : defaultClassName}`}
        isVertical
        stretchContent
        onBlur={!isDisabled ? onBlur : undefined}
        onFocus={!isDisabled ? onFocus : undefined}
        onClick={!isDisabled ? onClick : undefined}
        onKeyDown={!isDisabled ? onKeyDown : undefined}
        refFunc={refFunc}
      >
        { label && <span className={styles.label}>{label}</span>}
        <Button
          isDisabled={disableUp && allowDisable}
          onClick={this.changeValueUp}
          className={styles.button}
          variant="text"
        >
          <Icon className={`${styles.icon} ${styles.rotate}`} icon="carousel-down" />
        </Button>
        <span className={`${styles.value} ${valueClassName}`}>{formatFunc(value)}</span>
        <Button
          isDisabled={disableDown && allowDisable}
          onClick={this.changeValueDown}
          className={styles.button}
          variant="text"
        >
          <Icon className={styles.icon} icon="carousel-down" />
        </Button>
      </Group>
    );
  }
}

NumberSelector.propTypes = {
  canBeFocused: PropTypes.bool,
  allowDisable: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  valueClassName: PropTypes.string,
  nextGenerator: PropTypes.func,
  previousGenerator: PropTypes.func,
  formatFunc: PropTypes.func,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  refFunc: PropTypes.func,
};

NumberSelector.defaultProps = {
  canBeFocused: true,
  allowDisable: false,
  className: '',
  valueClassName: '',
  label: null,
  value: 0,
  nextGenerator: a => a + 1,
  previousGenerator: a => a - 1,
  formatFunc: a => a,
  onChange: () => {},
  isDisabled: false,
  onFocus: () => {},
  onBlur: () => {},
  onClick: () => {},
  onKeyDown: () => {},
  refFunc: () => {},
};

export default NumberSelector;
