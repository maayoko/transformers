import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import CardExpiryInput from './CardExpiryInput';

const store = new Store({
  value: null,
});

const change = (newValue, hasError) => {
  store.set({
    value: newValue,
    hasError,
  });
};


storiesOf('CardExpiryInput', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input', () => <CardExpiryInput hasError={store.get('hasError')} label="EXPIRY DATE" onChange={change} value={store.get('value')} />);
