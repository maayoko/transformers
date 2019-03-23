import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import FormatDropdownInput from './FormatDropdownInput';

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
  currentIcon: 'plane',
  currentLabel: '+365',
});

const change = (event) => {
  store.set({
    value: event,
    hasError: event === 'banana',
  });
};
const change2 = (label, icon) => {
  store.set({
    currentIcon: icon,
    currentLabel: label,
  });
};

storiesOf('FormatDropdownInput', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input', () => (
    <FormatDropdownInput
      currentIcon={store.get('currentIcon')}
      currentLabel={store.get('currentLabel')}
      elements={dropdownElements}
      onInputChange={change}
      value={store.get('value')}
      onDropdownChange={change2}
      format="### ### ###"
    />
  ))
  .add('basic input with label', () => (
    <FormatDropdownInput
      label="drop off"
      format="### ###"
      currentIcon="plane"
      currentLabel="+385"
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ))
  .add('dropdown on right', () => (
    <FormatDropdownInput
      label="drop off"
      position="right"
      currentIcon="plane"
      currentLabel="+385"
      format="### ###"
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ))
  .add('disabled dropdown', () => (
    <FormatDropdownInput
      isDisabled
      label="drop off"
      format="### ###"
      currentIcon="plane"
      currentLabel="+385"
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ));
