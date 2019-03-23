import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import LocationList from './LocationList';

const basicUsageLocations = [
  {
    location: 'Ottawa Macdonald-international Airport, Canada',
    label: 'pick up location',
    icon: 'plane',
  },
  {
    location: 'Drop off coworker',
    label: 'via',
    icon: 'car',
  },
  {
    location: 'My friend\'s house',
    label: 'via',
    icon: 'car',
  },
  {
    location: 'Ottawa Marriott Hotel, Ottawa, Canada',
    label: 'drop off location',
    icon: 'map',
  },
];

const reverseLocations = [
  {
    location: 'Ottawa Marriott Hotel, Ottawa, Canada',
    label: 'pick up location',
    icon: 'map',
  },
  {
    location: 'One more place',
    label: 'via',
    icon: 'car',
  },
  {
    location: 'Ottawa Macdonald-international Airport, Canada',
    label: 'Destination',
    icon: 'plane',
  },
];


storiesOf('LocationList', module)
  .addDecorator(withDocs(docs))
  .add('basic usage', () => (<LocationList locations={basicUsageLocations} />))
  .add('Example (return destination)', () => (<LocationList locations={reverseLocations} />));
