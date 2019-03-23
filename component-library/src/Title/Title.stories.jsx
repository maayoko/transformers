import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import Title from './Title';

storiesOf('Title', module)
  .addDecorator(withDocs(docs))
  .add('basic usage', () => <Title title="Pick-up location" subtitle="Ottawa Macdonald-international Airport, Canada" />)
  .add('basic usage with disabled', () => <Title isDisabled title="Pick-up location" subtitle="Ottawa Macdonald-international Airport, Canada" />)
  .add('display ', () => <Title type="display" title="Pick-up location" subtitle="Ottawa Macdonald-international Airport, Canada" />)
  .add('header 1 (title only) ', () => <Title type="header1" title="Pick-up location" />)
  .add('header 1 with subtitle ', () => <Title type="header1" title="Pick-up location" subtitle="From where do you want to go" />)
  .add('header 5 (title only) ', () => <Title type="header5" title="Pick-up location" />)
  .add('header 5 with subtitle ', () => <Title type="header5" title="Pick-up location" subtitle="From where do you want to go" />)
  .add('Examples (displayed) ', () =>
  <div>
    <Title type="display" title="Pick-up location" subtitle="Ottawa Macdonald-international Airport, Canada" />
    <Title type="display" title="Date & time" subtitle="15 May 2018,&emsp;9:30PM" />
    <Title type="display" title="Distance" subtitle="15km/9,3 Mile" />
    <Title type="display" title="Distance (label only)" />
  </div>);
