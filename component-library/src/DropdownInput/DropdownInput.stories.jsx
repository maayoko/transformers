import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import DropdownInput from './DropdownInput';

const dropdownElements = [
  {
    label: '+355',
    flag: 'al',
    index: 33,
  },
  {
    label: '+43',
    flag: 'au',
    index: 1,
  },
  {
    label: '+32',
    flag: 'be',
    index: 2,
  },
  {
    label: '+387',
    flag: 'ba',
    index: 34,
  },
  {
    label: '+385',
    flag: 'hr',
    index: 3,
  },
  {
    label: '+1',
    flag: 'ca',
    index: 38,
  },
  {
    label: '+357',
    flag: 'cy',
    index: 4,
  },
  {
    label: '+420',
    flag: 'cz',
    index: 5,
  },
  {
    label: '+45',
    flag: 'dk',
    index: 6,
  },
  {
    label: '+372',
    flag: 'ee',
    index: 7,
  },
  {
    label: '+358',
    flag: 'fi',
    index: 8,
  },
  {
    label: '+33',
    flag: 'fr',
    index: 9,
  },
  {
    label: '+383',
    flag: 'xk',
    index: 35,
  },
  {
    label: '+350',
    flag: 'gi',
    index: 10,
  },
  {
    label: '+49',
    flag: 'de',
    index: 11,
  },
  {
    label: '+30',
    flag: 'gr',
    index: 12,
  },
  {
    label: '+36',
    flag: 'hu',
    index: 13,
  },
  {
    label: '+354',
    flag: 'is',
    index: 14,
  },
  {
    label: '+353',
    flag: 'ie',
    index: 15,
  },
  {
    label: '+39',
    flag: 'it',
    index: 16,
  },
  {
    label: '+371',
    flag: 'lv',
    index: 17,
  },
  {
    label: '+423',
    flag: 'li',
    index: 18,
  },
  {
    label: '+379',
    flag: 'lt',
    index: 19,
  },
  {
    label: '+352',
    flag: 'lu',
    index: 20,
  },
  {
    label: '+389',
    flag: 'mk',
    index: 36,
  },
  {
    label: '+356',
    flag: 'mt',
    index: 21,
  },
  {
    label: '+31',
    flag: 'nl',
    index: 22,
  },
  {
    label: '+47',
    flag: 'no',
    index: 23,
  },
  {
    label: '+48',
    flag: 'pl',
    index: 24,
  },
  {
    label: '+351',
    flag: 'pt',
    index: 25,
  },
  {
    label: '+40',
    flag: 'ro',
    index: 26,
  },
  {
    label: '+381',
    flag: 'rs',
    index: 32,
  },
  {
    label: '+421',
    flag: 'sl',
    index: 27,
  },
  {
    label: '+386',
    flag: 'si',
    index: 28,
  },
  {
    label: '+34',
    flag: 'es',
    index: 29,
  },
  {
    label: '+46',
    flag: 'se',
    index: 30,
  },
  {
    label: '+44',
    flag: 'gb',
    index: 31,
  },
  {
    label: '+1',
    flag: 'us',
    index: 37,
  },
];

const store = new Store({
  value: '',
  currentFlag: 'gb',
  currentLabel: '+44',
});

const change = (event) => {
  store.set({
    value: event.target.value,
    hasError: event.target.value === 'banana',
  });
};
const change2 = (label, flag) => {
  store.set({
    currentFlag: flag,
    currentLabel: label,
  });
};

storiesOf('DropdownInput', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input', () => (
    <DropdownInput
      currentFlag={store.get('currentFlag')}
      currentLabel={store.get('currentLabel')}
      elements={dropdownElements}
      onInputChange={change}
      value={store.get('value')}
      onDropdownChange={change2}
    />
  ))
  .add('basic input with label', () => (
    <DropdownInput
      label="drop off"
      currentFlag={store.get('currentFlag')}
      currentLabel={store.get('currentLabel')}
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ))
  .add('dropdown on right', () => (
    <DropdownInput
      label="drop off"
      position="right"
      currentFlag={store.get('currentFlag')}
      currentLabel={store.get('currentLabel')}
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ))
  .add('disabled dropdown', () => (
    <DropdownInput
      isDisabled
      label="drop off"
      currentFlag={store.get('currentFlag')}
      currentLabel={store.get('currentLabel')}
      elements={dropdownElements}
      onInputChange={change}
      onDropdownChange={change2}
      value={store.get('value')}
    />
  ));
