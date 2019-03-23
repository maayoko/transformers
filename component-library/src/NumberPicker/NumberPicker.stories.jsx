import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import NumberPicker from './NumberPicker';
import Group from '../Group/Group';
import Icon from '../Icon/Icon';

const store = new Store({
  value: 0,
});

const change = (value) => {
  store.set({ value });
};

storiesOf('NumberPicker', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('passenger picker', () => (
    <div style={{ width: '165px' }}>
      <NumberPicker onChange={change} value={store.get('value')} icon="user" label="passengers" />
    </div>
  ))
  .add('luggage picker', () => (
    <div style={{ width: '165px' }}>
      <NumberPicker onChange={change} value={store.get('value')} icon="luggage" label="luggage" />
    </div>
  ))
  .add('disabled luggage picker', () => (
    <div style={{ width: '165px' }}>
      <NumberPicker onChange={change} value={store.get('value')} isDisabled icon="luggage" label="luggage" />
    </div>
  ))
  .add('Example (user picker with only 1-4 avalable)', () => (
    <div style={{ width: '165px' }}>
      <NumberPicker
        onChange={change}
        value={store.get('value')}
        allowDisable
        icon="user"
        label="Passengers"
        nextGenerator={(value) => {
          if (value + 1 <= 4) return value + 1;
          return null;
        }}
        previousGenerator={(value) => {
          if (value - 1 >= 1) return value - 1;
          return null;
        }}
      />
    </div>
  ))
  .add('Example (user picker with custom format func)', () => (
    <div style={{ width: '165px' }}>
      <NumberPicker
        allowDisable
        icon="user"
        label="Passengers"
        onChange={change}
        value={store.get('value')}
        nextGenerator={(value) => {
          if (value + 1 <= 4) return value + 1;
          return null;
        }}
        previousGenerator={(value) => {
          if (value - 1 >= 1) return value - 1;
          return null;
        }}
        formatFunc={(value) => {
          const users = [];
          for (let i = 0; i < value; i += 1) {
            users.push(<Icon icon="user" key={i} />);
          }
          return <Group removeGap>{users}</Group>;
        }}
      />
    </div>
  ));
