/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './FormatDropdownInput.module.scss';
import Input from '../FormatInput/FormatInput';
import Dropdown from '../Dropdown/Dropdown';

const defaultClassName = '';

class FormatDropdownInput extends React.Component {
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
  dropdownChange(label, icon) {
    const { onDropdownChange } = this.props;
    this.setState({
      open: false,
    }, () => {
      onDropdownChange(label, icon);
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
      hasError,
      currentIcon,
      elements,
      onInputChange,
      format,
      isDisabled,
      value,
      position,
    } = this.props;
    const { open } = this.state;
    return (
      <div className={`${className} ${styles.number_picker}`}>
        <Input
          format={format}
          prefixElement={
            position === 'left'
              ? <Dropdown
                className={`${styles.dropdown} ${styles.left}`}
                currentLabel={currentLabel}
                currentIcon={currentIcon}
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
          hasError={hasError}
        />
      </div>
    );
  }
}

FormatDropdownInput.propTypes = {
  className: PropTypes.string,
  currentLabel: PropTypes.string.isRequired,
  currentIcon: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
  })).isRequired,
  hasError: PropTypes.bool,
  format: PropTypes.string,
  icon: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onInputChange: PropTypes.func,
  onDropdownChange: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  value: PropTypes.string,
};

FormatDropdownInput.defaultProps = {
  className: '',
  value: 0,
  icon: '',
  label: '',
  hasError: false,
  format: null,
  currentIcon: '',
  isDisabled: false,
  position: 'left',
  onInputChange: () => {},
  onDropdownChange: () => {},
};

export default FormatDropdownInput;
