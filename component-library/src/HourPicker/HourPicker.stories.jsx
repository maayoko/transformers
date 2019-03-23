import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import HourPicker from './HourPicker';


const store = new Store({
  hour: 0,
  minute: 0,
});

const change = (value) => {
  store.set(value);
};


storiesOf('HourPicker', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic usage', () => <HourPicker onChange={change} hour={store.get('hour')} minute={store.get('minute')} icon="clock" label="time" />)
  .add('with step 10', () => <HourPicker onChange={change} hour={store.get('hour')} minute={store.get('minute')} step={10} />)
  .add('with fixed container width', () => <div style={{ width: '165px' }}><HourPicker onChange={change} hour={store.get('hour')} minute={store.get('minute')} step={10} /></div>)
  .add('disabled', () => <HourPicker isDisabled onChange={change} hour={store.get('hour')} minute={store.get('minute')} hour={15} minute={30} />);
