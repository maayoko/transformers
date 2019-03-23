import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
import Icon from '../Icon/Icon';
import Group from './Group';
import Button from '../Button/Button';

storiesOf('Group', module)
  .addDecorator(withDocs(docs))
  .add('icon group', () => (
    <Group>
      <Icon icon="car" key="car" />
      <Icon icon="car" key="car2" />
      <Icon icon="luggage" key="luggage" />
    </Group>
  ))
  .add('labeled icon group', () => (
    <Group>
      <LabeledIcon icon="luggage" label="1" />
      <LabeledIcon icon="user" label="2" />
      <LabeledIcon icon="tree" label="3" />
    </Group>
  ))
  .add('button group', () => (
    <Group>
      <Button color="primary">
        <span>Book a ride</span>
      </Button>
      <Button>Hello Button</Button>
    </Group>
  ))
  .add('mixed children', () => (
    <Group>
      <LabeledIcon icon="luggage" label="1" />
      <LabeledIcon icon="user" label="2" />
      <Icon icon="luggage" key="luggage" />
      <Button>Hello Button</Button>
    </Group>
  ))
  .add('vertical children', () => (
    <Group isVertical removeGap stretchContent>
      <Button position="left" variant="text"><LabeledIcon isReverse icon="map" label="Trips" /></Button>
      <Button position="left" variant="text"><LabeledIcon isReverse icon="user" label="Account information" /></Button>
      <Button position="left" variant="text"><LabeledIcon isReverse icon="plane" label="Change password" /></Button>
    </Group>
  ))
  .add('vertical children full width', () => (
    <Group isVertical fullWidth removeGap stretchContent>
      <Button position="left" variant="text"><LabeledIcon isReverse icon="map" label="Trips" /></Button>
      <Button position="left" variant="text"><LabeledIcon isReverse icon="user" label="Account information" /></Button>
      <Button position="left" variant="text"><LabeledIcon isReverse icon="plane" label="Change password" /></Button>
    </Group>
  ));
