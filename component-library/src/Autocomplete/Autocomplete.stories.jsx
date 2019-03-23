import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import Autocomplete from './Autocomplete';

const store = new Store({
  value: '',
});

const change = (value) => {
  store.set({
    value,
    hasError: value === 'banana',
  });
};


storiesOf('Autocomplete', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic usage', () => (
    <Autocomplete
      onChange={change}
      value={store.get('value')}
    />
  ))
  .add('disabled', () => (
    <Autocomplete
      isDisabled
      onChange={change}
      value={store.get('value')}
    />
  ))
  .add('loading elements', () => (
    <Autocomplete
      isLoading
      onChange={change}
      value={store.get('value')}
    />
  ))
  .add('no elements with custom label', () => (
    <Autocomplete
      onChange={change}
      items={[]}
      noElementsLabel="These are not the droids you have been loooking for."
      value={store.get('value')}
    />
  ));
