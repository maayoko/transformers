import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import Card from './Card';
import Button from '../Button/Button';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
import Group from '../Group/Group';
import Input from '../Input/Input';
import DatePicker from '../DatePicker/DatePicker';
import NumberPicker from '../NumberPicker/NumberPicker';
import HourPicker from '../HourPicker/HourPicker';
import styles from './Card.module.scss';
import Gallery from '../Gallery/Gallery';
import DummyContent from '../Gallery/DummyContent';
import Autocomplete from '../Autocomplete/Autocomplete';

storiesOf('Card', module)
  .addDecorator(withDocs(docs))
  .add('basic card', () => <Card />)
  .add('multiple cards', () => (
    <Group removeGap stretchContent>
      <Card>
        <Group isVertical stretchContent>
          <Input label="pick-up location" icon="plane" />
          <Input label="drop-off location" icon="map" />
          <Input label="drop-off location" icon="map" />
        </Group>
      </Card>
      <Card>
        <Group>
          <LabeledIcon icon="car" label="2" />
          <LabeledIcon icon="luggage" label="1" />
          <LabeledIcon icon="tree" label="3" />
        </Group>
        <Group>
          <LabeledIcon icon="car" label="2" />
          <LabeledIcon icon="luggage" label="1" />
          <LabeledIcon icon="tree" label="3" />
        </Group>
      </Card>
      <Card>
        <Button color="primary">
          <LabeledIcon icon="car" label="Find a ride" />
        </Button>
      </Card>
    </Group>
  ))
  .add('multiple cards with vertical positioning on smaller screens (max-width: 770px)', () => (
    <Group className={styles.column_on_vertical} removeGap stretchContent>
      <Card>
        <Group isVertical stretchContent>
          <Input label="pick-up location" icon="plane" />
          <Input label="drop-off location" icon="map" />
          <Input label="drop-off location" icon="map" />
        </Group>
      </Card>
      <Card>
        <Group>
          <LabeledIcon icon="car" label="2" />
          <LabeledIcon icon="luggage" label="1" />
          <LabeledIcon icon="tree" label="3" />
        </Group>
        <Group>
          <LabeledIcon icon="car" label="2" />
          <LabeledIcon icon="luggage" label="1" />
          <LabeledIcon icon="tree" label="3" />
        </Group>
      </Card>
      <Card>
        <Button color="primary">
          <LabeledIcon icon="car" label="Find a ride" />
        </Button>
      </Card>
    </Group>
  ))
  .add('Example (widget)', () => (
    <div>
      <Gallery hasContentLoad visibleChildren={{ desktop: 4, mobile: 1, tabletPortrait: 2, tabletLandscape: 3}}>
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} value="10€" text="TOYOTA Prius Plug-in Hibrid" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} value="15€" text="VOLVO V40" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} value="20€" text="TOYOTA SIENNA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} value="40€" text="BEMVE" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} value="20€" text="MERĐA" />
        <DummyContent buttonText="Book a Ride" buttonClass={styles.button} value="40€" text="HYUNDAY" />
      </Gallery>
      <Group removeGap className={styles.column_on_vertical} stretchContent style={{ marginTop: '50px' }}>
        <Card style={{ flexBasis: '35%' }}>
          <Group isVertical stretchContent>
            <Autocomplete
              customInput={<Input label="pick-up location" icon="plane" />}
            />
            <Autocomplete
              customInput={<Input label="drop-off location" icon="map" />}
            />
          </Group>
        </Card>
        <Card style={{ flexBasis: '25%' }}>
          <Group isVertical stretchContent>
            <DatePicker />
            <HourPicker />
          </Group>
        </Card>
        <Card style={{ flexBasis: '15%' }}>
          <Group isVertical stretchContent>
            <NumberPicker icon="user" label="passengers" />
            <NumberPicker icon="luggage" label="luggage" />
          </Group>
        </Card>
        <Card style={{ flexBasis: '20%' }}>
          <Group isVertical style={{ height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Input label="flight number" className={styles.demo} />
            <Button fullWidth className={styles.demo}>
              <LabeledIcon icon="car" label="Update" />
            </Button>
          </Group>
        </Card>
      </Group>
    </div>
  ));
