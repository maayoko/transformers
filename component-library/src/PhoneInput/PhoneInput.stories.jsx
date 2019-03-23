import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import PhoneInput from './PhoneInput';

const dropdownElements = [
  {
    label: '+385',
    icon: 'plane',
    index: 0,
  },
  {
    label: '+672',
    icon: 'tree',
    index: 1,
  },
  {
    label: '+232',
    icon: 'car-wifi',
    index: 2,
  },
  {
    label: '+23232',
    icon: 'luggage',
    index: 3,
  },
];

const store = new Store({
  value: '',
  hasError: false,
  currentIcon: 'plane',
  currentLabel: '+365',
});

const change = (event, hasError) => {
  store.set({
    value: event,
    hasError,
  });
};
const change2 = (label, icon) => {
  store.set({
    currentIcon: icon,
    currentLabel: label,
  });
};

storiesOf('PhoneInput', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input', () => (
    <PhoneInput
      currentIcon={store.get('currentIcon')}
      currentLabel={store.get('currentLabel')}
      elements={dropdownElements}
      onInputChange={change}
      value={store.get('value')}
      hasError={store.get('hasError')}
      onDropdownChange={change2}
    />
  ))
  .add('basic input with label', () => (
    <PhoneInput
      label="drop off"
      currentIcon="plane"
      currentLabel="+385"
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      hasError={store.get('hasError')}
      value={store.get('value')}
    />
  ))
  .add('dropdown on right', () => (
    <PhoneInput
      label="drop off"
      position="right"
      currentIcon="plane"
      hasError={store.get('hasError')}
      currentLabel="+385"
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ))
  .add('disabled dropdown', () => (
    <PhoneInput
      isDisabled
      label="drop off"
      hasError={store.get('hasError')}
      currentIcon="plane"
      currentLabel="+385"
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ));
