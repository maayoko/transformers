import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';
import Button from './Button';
import Icon from '../Icon/Icon';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
import styles from './Button.module.scss';
import docs from './README.md';

const padding = { padding: '10px' };

storiesOf('Button', module)
  .addDecorator(withDocs(docs))
  .add('default', () => <Button>Hello Button</Button>)
  .add('primary', () => <Button color="primary">Hello Button</Button>)
  .add('with icon', () => (
    <Button onClick={action('clicked')}>
      <span>Book a ride</span>
      <Icon className={styles.icon} icon="car" />
    </Button>
  ))
  .add('primary with icon', () => (
    <Button color="primary">
      <span>Book a ride</span>
      <Icon className={styles.icon} icon="car" />
    </Button>
  ))
  .add('disabled showcase', () => (
    <div>
      <div style={padding}>
        Initial with disabled&nbsp;&nbsp;
        <Button isDisabled> Pick a ride </Button>
      </div>
      <div style={padding}>
        Primary with disabled&nbsp;&nbsp;
        <Button color="primary" isDisabled> Pick a ride </Button>
      </div>
      <div style={padding}>
        Default outlined with disabled&nbsp;&nbsp;
        <Button variant="outlined" isDisabled> Pick a ride </Button>
      </div>
      <div style={padding}>
        Primary outlined with disabled&nbsp;&nbsp;
        <Button variant="outlined" color="primary" isDisabled> Pick a ride </Button>
      </div>
      <div style={padding}>
        Default text with disabled&nbsp;&nbsp;
        <Button variant="text" isDisabled> Pick a ride </Button>
      </div>
      <div style={padding}>
        Primary text with disabled&nbsp;&nbsp;
        <Button variant="text" color="primary" isDisabled> Pick a ride </Button>
      </div>
    </div>
  ))
  .add('full width', () => <Button fullWidth>Hello Button</Button>)
  .add('text variant', () => <Button variant="text">Hello Button</Button>)
  .add('Example (more destinations)', () =>
  <div>
    &nbsp; Inactive mode: &nbsp;
    <Button variant="outlined">+ More Destinations</Button>
    &nbsp; Active mode: &nbsp;
    <Button color="primary" variant="outlined">Less Destinations</Button>
  </div>)
  .add('Example (pick a ride)', () =>
  <div>
    &nbsp; Enabled: &nbsp;
    <Button color="primary"><LabeledIcon icon="car" label="Pick a ride" /></Button>
    &nbsp; Disabled (no color): &nbsp;
    <Button isDisabled color="none"><LabeledIcon icon="car" label="Pick a ride" /></Button>
    &nbsp; Disabled (primary): &nbsp;
    <Button isDisabled color="primary"><LabeledIcon icon="car" label="Pick a ride" /></Button>
  </div>);
