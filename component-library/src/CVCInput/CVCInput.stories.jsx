import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import CVCInput from './CVCInput';

const store = new Store({
  value: null,
});

const change = (newValue, hasError) => {
  store.set({
    value: newValue,
    hasError,
  });
};

storiesOf('CVCInput', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input', () => <CVCInput hasError={store.get('hasError')} label="CVC" onChange={change} value={store.get('value')} />);
