import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import Input from './FormatInput';

const store = new Store({
  value: '',
  isLoading: false,
  isSuccess: undefined,
});

const change = (event) => {
  store.set({
    value: event,
    hasError: event === 'banana',
  });
};

storiesOf('Format Input', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input with card format', () => <Input onChange={change} value={store.get('value')} format="#### #### #### ####" />)
  .add('basic input with expiry format', () => <Input onChange={change} value={store.get('value')} format="## / ####" />)
  .add('basic input with CVC format', () => <Input onChange={change} value={store.get('value')} format="###" />);
