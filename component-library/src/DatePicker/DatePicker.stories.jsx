import React from 'react';
import { storiesOf } from '@storybook/react';
import { StateDecorator, Store } from '@sambego/storybook-state';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import DatePicker from './DatePicker';

const store = new Store({
  selected: new Date(),
});

storiesOf('DatePicker', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(withDocs(docs))
  .add('basic datepicker', () => <DatePicker selected={store.selected} onSelect={value => store.set({ selected: value })} />)
  .add('preselected current date', () => <DatePicker selected={store.selected} onSelect={value => store.set({ selected: value })} />)
  .add('with placeholder', () => <DatePicker selected={store.selected} onSelect={value => store.set({ selected: value })} placeholder="Select date of trip.." />)
  .add('disabled picker', () => <DatePicker selected={store.selected} onSelect={value => store.set({ selected: value })} isDisabled />)
  .add('picker with error', () => <DatePicker hasError selected={store.selected} onSelect={value => store.set({ selected: value })} />)
  .add('read only picker', () => <DatePicker readOnly selected={store.selected} onSelect={value => store.set({ selected: value })} />);
