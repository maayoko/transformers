import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import Stripe from './Stripe';

storiesOf('Stripe', module)
  .addDecorator(withDocs(docs))
  .add('basic usage', () => (<Stripe />))