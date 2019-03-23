import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import LabeledIcon from './LabeledIcon';

storiesOf('LabeledIcon', module)
  .addDecorator(withDocs(docs))
  .add('car icon', () => <LabeledIcon icon="user" label="2" />)
  .add('user icon', () => <LabeledIcon icon="luggage" label="1" />)
  .add('user icon with text', () => <LabeledIcon icon="user" label="Users" />)
  .add('reverse ', () => <LabeledIcon isReverse icon="user" label="Users" />);
