import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import Dropdown from './Dropdown';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

storiesOf('Dropdown', module)
  .addDecorator(withDocs(docs))
  .add('basic dropdown', () => (
    <Dropdown
      currentLabel="+385"
      elements={[
        {
          label: '+385',
          icon: 'plane',
          index: 0,
        },
        {
          label: '+672',
          icon: 'tree',
          index: 1,
        },
        {
          label: '+232',
          icon: 'car-wifi',
          index: 2,
        },
        {
          label: '+23232',
          icon: 'luggage',
          index: 3,
        },
        {
          label: '+33',
          icon: 'map',
          index: 4,
        },
      ]}
    />
  )).add('dropdown with custom button', () => (
    <Dropdown
      customButton={
        <Button position="left" variant="text"> <Icon icon="car-wifi" /> </Button>
      }
      currentLabel="+385"
      elements={[
        {
          label: '+385',
          icon: 'plane',
          index: 0,
        },
        {
          label: '+672',
          icon: 'tree',
          index: 1,
        },
        {
          label: '+232',
          icon: 'car-wifi',
          index: 2,
        },
        {
          label: '+23232',
          icon: 'luggage',
          index: 3,
        },
      ]}
    />
  ))
  .add('disabled dropdown', () => (
    <Dropdown
      isDisabled
      currentLabel="+385"
      elements={[
        {
          label: '+385',
          icon: 'plane',
          index: 0,
        },
        {
          label: '+672',
          icon: 'tree',
          index: 1,
        },
        {
          label: '+232',
          icon: 'car-wifi',
          index: 2,
        },
        {
          label: '+23232',
          icon: 'luggage',
          index: 3,
        },
      ]}
    />
  ))
  .add('call numbers dropdown', () => (
    <Dropdown
      currentLabel="+44"
      currentFlag="gb"
      elements={[
        {
          label: '+44',
          flag: 'gb',
          index: 0,
        },
        {
          label: '+385',
          flag: 'hr',
          index: 1,
        },
        {
          label: '+386',
          flag: 'si',
          index: 2,
        },
        {
          label: '+31',
          flag: 'nl',
          index: 3,
        },
      ]}
    />
  ));
