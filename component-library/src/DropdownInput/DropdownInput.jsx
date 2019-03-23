/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './DropdownInput.module.scss';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';

const defaultClassName = '';

class DropdownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  @boundMethod
  setRef(refElement) {
    this.dropdown = refElement;
  }

  @boundMethod
  closeSelector() {
    this.setState({
      open: false,
    });
  }

  @boundMethod
  dropdownChange(label, icon, flag) {
    const { onDropdownChange } = this.props;
    this.setState({
      open: false,
    }, () => {
      if (icon) {
        onDropdownChange(label, icon);
      } else {
        onDropdownChange(label, flag);
      }
    });
  }


  @boundMethod
  toggleOpen(e) {
    e.stopPropagation();
    const { isDisabled } = this.props;
    if (!isDisabled) {
      this.setState(prev => ({
        open: !prev.open,
      }));
    }
  }


  render() {
    const {
      label,
      className,
      icon,
      currentLabel,
      currentIcon,
      currentFlag,
      elements,
      onInputChange,
      isDisabled,
      hasError,
      value,
      position,
    } = this.props;
    const { open } = this.state;
    return (
      <div className={`${className} ${styles.number_picker}`}>
        <Input
          hasError={hasError}
          prefixElement={
            position === 'left'
              ? <Dropdown
                className={`${styles.dropdown} ${styles.left}`}
                currentLabel={currentLabel}
                currentIcon={currentIcon}
                currentFlag={currentFlag}
                elements={elements}
                onChange={this.dropdownChange}
                controlledOpen
                onClick={this.toggleOpen}
                open={open}
                refFunc={this.setRef}
              /> : undefined
          }
          sufixElement={
            position === 'right'
              ? <Dropdown
                className={`${styles.dropdown} ${styles.right}`}
                currentLabel={currentLabel}
                currentIcon={currentIcon}
                currentFlag={currentFlag}
                onClick={this.toggleOpen}
                elements={elements}
                onChange={this.dropdownChange}
                controlledOpen
                open={open}
                refFunc={this.setRef}
              /> : undefined
          }
          isDisabled={isDisabled}
          className={`${styles.input} ${open ? styles.open : defaultClassName}`}
          label={label}
          icon={icon}
          value={value.toString()}
          onChange={onInputChange}
          enableFocus={!open}
          onBlur={this.closeSelector}
        />
      </div>
    );
  }
}

DropdownInput.propTypes = {
  className: PropTypes.string,
  currentLabel: PropTypes.string.isRequired,
  currentIcon: PropTypes.string,
  currentFlag: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
  })).isRequired,
  hasError: PropTypes.bool,
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onInputChange: PropTypes.func,
  onDropdownChange: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  value: PropTypes.string,
};

DropdownInput.defaultProps = {
  className: '',
  value: 0,
  icon: '',
  label: '',
  hasError: false,
  currentIcon: null,
  currentFlag: null,
  isDisabled: false,
  position: 'left',
  onInputChange: () => {},
  onDropdownChange: () => {},
};

export default DropdownInput;
