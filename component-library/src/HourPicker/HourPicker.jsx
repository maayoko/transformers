/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './HourPicker.module.scss';
import Card from '../Card/Card';
import Group from '../Group/Group';
import Input from '../Input/Input';
import NumberSelector from '../NumberSelector/NumberSelector';
import { hourPreviousSelector, hourNextSelector, leadingZeroFormatFunction} from './util';

const defaultClassName = '';

class HourPicker extends React.Component {
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
  hourChange(value) {
    const { onChange } = this.props;
    onChange({ hour: value });
  }

  @boundMethod
  minuteChange(value) {
    const { onChange } = this.props;
    onChange({ minute: value });
  }

  @boundMethod
  minutePreviousSelector(value) {
    const { step } = this.props;
    if ((value - step) >= 0) {
      return value - step;
    }
    return 59;
  }

  @boundMethod
  minuteNextSelector(value) {
    const { step } = this.props;
    if ((value + step) <= 59) {
      return value + step;
    }
    return 0;
  }

  render() {
    const {
      label,
      className,
      icon,
      hour,
      minute,
      isDisabled,
    } = this.props;
    const { open } = this.state;
    return (
      <div className={`${className} ${styles.hour_picker}`}>
        <Input
          className={`${styles.input} ${open ? styles.open : defaultClassName}`}
          label={label}
          icon={icon}
          isDisabled={isDisabled}
          value={`${leadingZeroFormatFunction(hour)} : ${leadingZeroFormatFunction(minute)}`}
          onFocus={this.openSelector}
        />
        <Card className={`${styles.card}  ${open ? defaultClassName : styles.closed}`}>
          <Group
            onBlur={this.closeSelector}
            refFunc={this.setRef}
            className={styles.group}
          >
            <NumberSelector
              label="hours"
              canBeFocused={false}
              previousGenerator={hourPreviousSelector}
              nextGenerator={hourNextSelector}
              onChange={this.hourChange}
              value={hour}
              formatFunc={leadingZeroFormatFunction}
            />
            <NumberSelector
              label="minutes"
              canBeFocused={false}
              onChange={this.minuteChange}
              value={minute}
              previousGenerator={this.minutePreviousSelector}
              nextGenerator={this.minuteNextSelector}
              formatFunc={leadingZeroFormatFunction}
            />
          </Group>
        </Card>
      </div>
    );
  }
}

HourPicker.propTypes = {
  className: PropTypes.string,
  hour: PropTypes.number,
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  minute: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,
};

HourPicker.defaultProps = {
  className: '',
  label: 'time',
  icon: 'clock',
  hour: 0,
  minute: 0,
  step: 5,
  onChange: () => {},
  isDisabled: false,
};

export default HourPicker;
