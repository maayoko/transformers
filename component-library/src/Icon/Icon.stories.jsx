import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import Icon from './Icon';

storiesOf('Icon', module)
  .addDecorator(withDocs(docs))
  .add('demo', () => (
    <div>
      <Icon style={{ fontSize: '128px' }} icon="calendar" />
      <Icon style={{ fontSize: '128px' }} icon="user" />
      <Icon style={{ fontSize: '128px' }} icon="clock" />
      <Icon style={{ fontSize: '128px' }} icon="lugagge" />
      <Icon style={{ fontSize: '128px' }} icon="plane" />
      <Icon style={{ fontSize: '128px' }} icon="car-wifi" />
      <Icon style={{ fontSize: '128px' }} icon="tree" />
      <Icon style={{ fontSize: '128px' }} icon="map" />
      <Icon style={{ fontSize: '128px' }} icon="facebook" />
      <Icon style={{ fontSize: '128px' }} icon="linkedin" />
      <Icon style={{ fontSize: '128px' }} icon="twitter" />
    </div>
  ))
  .add('flags', () => (
    <div>
      <Icon style={{ fontSize: '128px' }} flag="hr" />
      <Icon style={{ fontSize: '128px' }} flag="si" />
      <Icon style={{ fontSize: '128px' }} flag="nl" />
    </div>
  ));
