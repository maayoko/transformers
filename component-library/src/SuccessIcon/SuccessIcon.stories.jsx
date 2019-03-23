import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import SuccessIcon from './SuccessIcon';

const store = new Store({
  success: false,
});

setTimeout(() => {
  store.set({ success: true });
}, 5000);

storiesOf('SuccessIcon', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('loading', () => <SuccessIcon isLoading />)
  .add('unsuccessful', () => <SuccessIcon isSuccess={false} />)
  .add('successful', () => <SuccessIcon isSuccess={store.get('success')} />);
