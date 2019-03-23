/* eslint-disable func-names */
/* eslint-disable no-param-reassign */

/*
  Decorator to check if component has disabled property.
  If the property exists and is set to true, nothing happens.
  If the property doesn't exist or is set to false, the function is executed.
 */
function enabledOnly(target, key, descriptor) {
  const method = descriptor.value; // references the method being
  descriptor.value = function (...args) {
    if ('isDisabled' in this.props && this.props.isDisabled) {
      return; // do nothing if component has props isDisabled set to true
    }

    method.apply(this, args);
  };
}

export {
  enabledOnly,
};
