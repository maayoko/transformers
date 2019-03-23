import React from 'react';
import PropTypes from 'prop-types';
import FormatDropdownInput from '../FormatDropdownInput/FormatDropdownInput';


const PhoneInput = (props) => {
  const {
    onInputChange,
    label,
    isDisabled,
    name,
    value,
    className,
    icon,
    hasError,
    placeholder,
    format,
    elements,
    currentIcon,
    currentLabel,
    onDropdownChange,
  } = props;
  return (
    <FormatDropdownInput
      format={format || '## ### ## ##'}
      hasError={hasError}
      onInputChange={(newValue) => {
        onInputChange(newValue,
          newValue !== null && newValue.length < 6);
      }}
      label={label}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      icon={icon}
      placeholder={placeholder}
      isDisabled={isDisabled}
      name={name}
      onDropdownChange={onDropdownChange}
      currentIcon={currentIcon}
      currentLabel={currentLabel}
      value={value}
      className={className}
      elements={elements}
    />
  );
};

PhoneInput.propTypes = {
  className: PropTypes.string,
  currentLabel: PropTypes.string.isRequired,
  currentIcon: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
  })).isRequired,
  format: PropTypes.string,
  hasError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onInputChange: PropTypes.func,
  onDropdownChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

PhoneInput.defaultProps = {
  className: null,
  format: null,
  hasError: false,
  isDisabled: false,
  label: null,
  icon: null,
  value: null,
  currentIcon: null,
  placeholder: 'Insert phone number',
  name: 'dummyinput',
  onInputChange: () => { },
  onDropdownChange: () => { },
};

export default PhoneInput;
