import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import CardNumberInput from './CardNumberInput';

const store = new Store({
  value: null,
});

const change = (newValue, hasError) => {
  console.log(newValue, hasError);
  store.set({
    value: newValue,
    hasError,
  });
};

storiesOf('CardNumberInput', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input', () => <CardNumberInput hasError={store.get('hasError')} label="CARD NUMBER" onChange={change} value={store.get('value')} />);

