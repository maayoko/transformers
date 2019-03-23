import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import Pricing from './Pricing';

const store = new Store({
  value: '',
  isLoading: false,
  isSuccess: undefined,
});


const change = (event) => {
  store.set({
    value: event.target.value,
    isLoading: false,
    isSuccess: undefined,
  });
  if (event.target.value === 'kod1') {
    store.set({
      isLoading: true,
    });
    setTimeout(() => {
      store.set({
        isLoading: false,
        isSuccess: true,
      });
    }, 5000);
  }
  if (event.target.value === 'kod123') {
    store.set({
      isLoading: true,
    });
    setTimeout(() => {
      store.set({
        isLoading: false,
        isSuccess: false,
      });
    }, 5000);
  }
};

const items = [{
  label: 'Subtotal',
  value: 169.80,
  currency: '€',
},
{
  label: 'Airport pick-up service',
  value: 'Free',
  currency: '€',
},
{
  label: 'Airport drop-off service',
  value: 'Free',
  currency: '€',
},
{
  label: 'Child seat',
  value: 5,
  currency: '€',
},
];

storiesOf('Pricing', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic usage', () => <Pricing items={items} />)
  .add('Example (state change on input change)', () => (
    <div style={{ width: '290px' }}>
      <Pricing
        onDiscountChange={change}
        isDiscountLoading={store.get('isLoading')}
        isDiscountSuccess={store.get('isSuccess')}
        inputValue={store.get('value')}
        items={items}
      />
    </div>
  ));
