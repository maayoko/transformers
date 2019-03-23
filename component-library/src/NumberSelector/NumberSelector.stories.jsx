/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import NumberSelector from './NumberSelector';
import Card from '../Card/Card';
import Group from '../Group/Group';
import styles from './NumberSelector.module.scss';

const store = new Store({
  value: 0,
  hour: 0,
  minute: 0,
});

const change = (value) => {
  store.set({ value });
};

const changeHour = (hour) => {
  store.set({ hour });
};

const changeMinute = (minute) => {
  store.set({ minute });
};


storiesOf('NumberSelector', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic selector (no restrictions)', () => (
    <Card style={{ display: 'inline-flex' }}>
      <NumberSelector onChange={change} value={store.get('value')} label="brojevi" />
    </Card>
  ))
  .add('basic selector custom label style', () => (
    <Card style={{ display: 'inline-flex' }}>
      <NumberSelector onChange={change} value={store.get('value')} valueClassName={styles.customValueDemo} label="brojevi" />
    </Card>))
  .add('disabled selector', () => (
    <Card style={{ display: 'inline-flex' }}>
      <NumberSelector onChange={change} value={store.get('value')} label="brojevi" isDisabled />
    </Card>))
  .add('only positive numbers', () => (
    <Card style={{ display: 'inline-flex' }}>
      <NumberSelector
        label="brojevi"
        allowDisable
        onChange={change}
        value={store.get('value')}
        previousGenerator={(value) => {
          if ((value - 1) >= 0) return value - 1;
          return null;
        }}
      />
    </Card>
  ))
  .add('numbers from 1 to 10, without overflow', () => (
    <Card style={{ display: 'inline-flex' }}>
      <NumberSelector
        label="brojevi"
        allowDisable
        onChange={change}
        value={store.get('value')}
        previousGenerator={(value) => {
          if ((value - 1) >= 0) return value - 1;
          return null;
        }}
        nextGenerator={(value) => {
          if ((value + 1) <= 10) return value + 1;
          return null;
        }}
      />
    </Card>
  ))
  .add('24 hour selector', () => (
    <Card style={{ display: 'inline-flex' }}>
      <NumberSelector
        label="Brojevi"
        onChange={change}
        value={store.get('value')}
        previousGenerator={(value) => {
          if ((value - 1) >= 0) {
            return value - 1;
          }
          return 23;
        }}
        nextGenerator={(value) => {
          if ((value + 1) <= 23) {
            return value + 1;
          }
          return 0;
        }}
      />
    </Card>
  ))
  .add('24 hour selector with formatter', () => (
    <Card style={{ display: 'inline-flex' }}>
      <NumberSelector
        label="hours"
        onChange={change}
        value={store.get('value')}
        previousGenerator={(value) => {
          if ((value - 1) >= 0) {
            return value - 1;
          }
          return 23;
        }}
        nextGenerator={(value) => {
          if ((value + 1) <= 23) {
            return value + 1;
          }
          return 0;
        }}
        formatFunc={(value) => {
          if (value < 10) return `0${value}`;
          return `${value}`;
        }}
      />
    </Card>
  ))
  .add('Hour and time formatter with step 1', () => (
    <Card style={{ display: 'inline-flex', padding: '5px 20px' }}>
      <Group>
        <NumberSelector
          label="hours"
          onChange={changeHour}
          value={store.get('hour')}
          previousGenerator={(value) => {
            if ((value - 1) >= 0) {
              return value - 1;
            }
            return 23;
          }}
          nextGenerator={(value) => {
            if ((value + 1) <= 23) {
              return value + 1;
            }
            return 0;
          }}
          formatFunc={(value) => {
            if (value < 10) return `0${value}`;
            return `${value}`;
          }}
        />
        <NumberSelector
          label="minutes"
          onChange={changeMinute}
          value={store.get('minute')}
          previousGenerator={(value) => {
            if ((value - 1) >= 0) {
              return value - 1;
            }
            return 59;
          }}
          nextGenerator={(value) => {
            if ((value + 1) <= 59) {
              return value + 1;
            }
            return 0;
          }}
          formatFunc={(value) => {
            if (value < 10) return `0${value}`;
            return `${value}`;
          }}
        />
      </Group>
    </Card>
  ));
