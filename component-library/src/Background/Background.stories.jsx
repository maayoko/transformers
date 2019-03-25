import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import Background from './Background';


storiesOf('Background', module)
  .addDecorator(withDocs(docs))
  .add('basic usage', () => (
    <Background
    />
  ));
