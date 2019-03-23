import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from './Loader';

storiesOf('Loader', module)
  .add('basic loader', () => <Loader icon="car" />);
