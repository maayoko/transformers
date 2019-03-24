import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Button from './Button';
import docs from './README.md';

storiesOf('Button', module)
  .addDecorator(withDocs(docs))
  .add('primary', () => <Button onClick={() => console.log("clicked")} variant="primary">Hello Button</Button>)