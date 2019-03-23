/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import DummyContent from './DummyContent';
import Button from '../Button/Button';
import Gallery from './Gallery';
import styles from './Gallery.module.scss';

const visibleChildren = {
  mobile: 1,
  tabletPortrait: 2,
  tabletLandscape: 3,
  desktop: 4,
};

const onButtonClick = (e) => { console.log('Clicked button'); e.stopPropagation(); };

storiesOf('Gallery', module)
  .addDecorator(withDocs(docs))
  .add('basic usage', () => (
    <div>
      <Gallery hasContentLoad visibleChildren={visibleChildren}>
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="10€" text="TOYOTA Prius Plug-in Hibrid" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="15€" text="VOLVO V40" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="20€" text="TOYOTA SIENNA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="40€" text="BEMVE" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="20€" text="MERĐA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="40€" text="HYUNDAY" />
      </Gallery>
    </div>))
  .add('without arrows', () => (
    <div>
      <Gallery hasContentLoad hasArrows={false} visibleChildren={visibleChildren}>
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="10€" text="TOYOTA Prius Plug-in Hibrid" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="15€" text="VOLVO V40" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="20€" text="TOYOTA SIENNA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="40€" text="BEMVE" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="20€" text="MERĐA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="40€" text="HYUNDAY" />
      </Gallery>
    </div>))
  .add('disabled', () => (
    <div>
      <Gallery isDisabled hasContentLoad visibleChildren={visibleChildren}>
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="10€" text="TOYOTA Prius Plug-in Hibrid" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="15€" text="VOLVO V40" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="20€" text="TOYOTA SIENNA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="40€" text="BEMVE" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="20€" text="MERĐA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="40€" text="HYUNDAY" />
      </Gallery>
    </div>))
  .add('Example (Gallery of buttons)', () => (
    <Gallery visibleChildren={visibleChildren}>
      <Button className={styles.demo_button}> Pick a ride </Button>
      <Button className={styles.demo_button} color="primary"> Pick a ride </Button>
      <Button className={styles.demo_button} variant="outlined"> Pick a ride </Button>
      <Button className={styles.demo_button} variant="outlined" color="primary"> Pick a ride </Button>
      <Button className={styles.demo_button} variant="text" color="primary"> Pick a ride </Button>
    </Gallery>
  ))
  .add('Example (Gallery with smaller number of children)', () => (
    <Gallery hasContentLoad visibleChildren={visibleChildren}>
      <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="10€" text="TOYOTA Prius Plug-in Hibrid" />
      <DummyContent buttonText="Book a Ride" buttonClass={styles.button} onButtonClick={onButtonClick} value="15€" text="VOLVO V40" />
    </Gallery>
  ));
