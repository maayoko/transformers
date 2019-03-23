import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import Input from './Input';
import Group from '../Group/Group';
import SuccessIcon from '../SuccessIcon/SuccessIcon';

const store = new Store({
  value: '',
  isLoading: false,
  isSuccess: undefined,
});


setTimeout(() => {
  store.set({ isLoading: true });
  setTimeout(() => {
    store.set({ isLoading: false, isSuccess: true });
    setTimeout(() => {
      store.set({ isLoading: false, isSuccess: false });
    }, 5000);
  }, 5000);
}, 5000);


const change = (event) => {
  store.set({
    value: event.target.value,
    hasError: event.target.value === 'banana',
  });
};

storiesOf('Input', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic input', () => <Input onChange={change} value={store.get('value')} />)
  .add('basic input with label', () => <Input label="drop off" onChange={change} value={store.get('value')} />)
  .add('basic input with icon', () => <Input icon="plane" onChange={change} value={store.get('value')} />)
  .add('basic input with icon and placeholder', () => <Input placeholder="Is it a bird?" icon="plane" />)
  .add('basic input with icon and label', () => <Input onChange={change} value={store.get('value')} label="drop off location" icon="plane" />)
  .add('error input with icon and label', () => <Input hasError label="drop off location" icon="plane" />)
  .add('disabled input with icon and label', () => <Input isDisabled label="drop off location" icon="plane" />)
  .add('Example (with loading state - using SuccessIcon as sufixElement)', () => (
    <Input
      label="drop off location"
      sufixElement={
        <SuccessIcon style={{ paddingRight: '10px' }} isLoading />
      }
    />
  ))
  .add('Example (with successful loading state - using SuccessIcon as sufixElement)', () => (
    <Input
      label="drop off location"
      sufixElement={
        <SuccessIcon style={{ paddingRight: '10px' }} isSuccess />
      }
    />
  ))
  .add('Example (with changing state - using SuccessIcon as sufixElement)', () => (
    <Input
      label="drop off location"
      sufixElement={
        <SuccessIcon style={{ paddingRight: '15px' }} isLoading={store.get('isLoading')} isSuccess={store.get('isSuccess')} />
      }
    />
  ))
  .add('Example (error on banana)', () => <Input hasError={store.get('hasError')} onChange={change} value={store.get('value')} />)
  .add('Example (group of input)', () => (
    <Group isVertical stretchContent>
      <Input label="First name" />
      <Input label="E-mail" />
      <Input label="city" />
    </Group>))
  .add('Example (mixed group)', () => (
    <Group isVertical stretchContent>
      <Input label="First name" />
      <Group fullWidth centerContent style={{ margin: 0 }}>
        <Input label="E-mail" />
        <Input label="city" />
        <Input label="city" />
      </Group>
      <Group fullWidth style={{ margin: 0 }}>
        <Input label="E-mail" />
        <Input label="city" />
      </Group>
    </Group>))
  .add('Example (group of input with icons)', () => (
    <Group isVertical stretchContent>
      <Input label="pick-up location" icon="plane" />
      <Input label="drop-off location" icon="map" />
    </Group>));
