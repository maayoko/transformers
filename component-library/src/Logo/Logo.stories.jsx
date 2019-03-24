import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Logo from './Logo';
import docs from './README.md';

storiesOf('Logo', module)
  .addDecorator(withDocs(docs))
  .add('Small - primary', () => <Logo size="small" color="primary" variant="text">Transformers</Logo>)
  .add('Small - black', () => <Logo size="small" color="black" variant="text">Transformers</Logo>)
  .add('Big - primary', () => <Logo size="big" color="primary" variant="text">Transformers</Logo>)
  .add('Big - black', () => <Logo size="big" color="black" variant="text">Transformers</Logo>)