/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './NumberPicker.module.scss';
import Card from '../Card/Card';
import Input from '../Input/Input';
import NumberSelector from '../NumberSelector/NumberSelector';

const defaultClassName = '';

class NumberPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  @boundMethod
  setRef(refElement) {
    this.selector = refElement;
  }

  @boundMethod
  openSelector() {
    const { isDisabled } = this.props;
    if (!isDisabled) {
      this.setState({
        open: true,
      }, () => {
        if (this.selector) {
          this.selector.focus();
        }
      });
    }
  }

  @boundMethod
  closeSelector() {
    this.setState({
      open: false,
    });
  }

  @boundMethod
  valueChange(value) {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const {
      label,
      className,
      icon,
      allowDisable,
      valueClassName,
      nextGenerator,
      previousGenerator,
      formatFunc,
      isDisabled,
      value,
    } = this.props;
    const { open } = this.state;
    return (
      <div className={`${className} ${styles.number_picker}`}>
        <Input
          isDisabled={isDisabled}
          className={`${styles.input} ${open ? styles.open : defaultClassName}`}
          label={label}
          icon={icon}
          value={value.toString()}
          onFocus={this.openSelector}
        />
        <Card className={`${styles.card}  ${open ? defaultClassName : styles.closed}`}>
          <NumberSelector
            // eslint-disable-next-line react/destructuring-assignment
            value={this.props.value}
            allowDisable={allowDisable}
            nextGenerator={nextGenerator}
            previousGenerator={previousGenerator}
            valueClassName={valueClassName}
            onBlur={this.closeSelector}
            onChange={this.valueChange}
            formatFunc={formatFunc}
            label={label}
            refFunc={this.setRef}
          />
        </Card>
      </div>
    );
  }
}

NumberPicker.propTypes = {
  allowDisable: PropTypes.bool,
  className: PropTypes.string,
  formatFunc: PropTypes.func,
  icon: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  nextGenerator: PropTypes.func,
  onChange: PropTypes.func,
  previousGenerator: PropTypes.func,
  value: PropTypes.number,
  valueClassName: PropTypes.string,
};

NumberPicker.defaultProps = {
  allowDisable: false,
  className: '',
  valueClassName: '',
  value: 0,
  nextGenerator: undefined,
  previousGenerator: undefined,
  formatFunc: undefined,
  onChange: () => {},
  isDisabled: false,
};

export default NumberPicker;
