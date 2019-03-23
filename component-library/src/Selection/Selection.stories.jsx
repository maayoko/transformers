import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { StateDecorator, Store } from '@sambego/storybook-state';
import docs from './README.md';
import Selection from './Selection';
import Group from '../Group/Group';
import NumberSelector from '../NumberSelector/NumberSelector';
import Title from '../Title/Title';
import styles from './Selection.module.scss';
import Card from '../Card/Card';

const store = new Store({
  isActive: false,
  isActive1: false,
  value: 0,
  value1: 0,
});

const clickFunc = () => {
  store.set({ isActive: !store.get('isActive') });
};
const clickFunc1 = () => {
  store.set({ isActive1: !store.get('isActive1') });
};
const clickFunc3 = () => {
  store.set({ isActive3: true, isActive4: false, isActive5: false });
};
const clickFunc4 = () => {
  store.set({ isActive3: false, isActive4: true, isActive5: false });
};
const clickFunc5 = () => {
  store.set({ isActive3: false, isActive4: false, isActive5: true });
};

const change = (value) => {
  store.set({ value });
};

const change1 = (value) => {
  store.set({ value1: value });
};


storiesOf('Selection', module)
  .addDecorator(withDocs(docs))
  .addDecorator(StateDecorator(store))
  .add('basic usage (checkbox)', () => (<Selection onClick={clickFunc} isActive={store.get('isActive')} selection="Return Journey?" />))
  .add('basic usage (radio)', () => (<Selection type="radio" onClick={clickFunc} isActive={store.get('isActive')} selection="Return Journey?" />))
  .add('disabled ', () => (<Selection isDisabled onClick={clickFunc} isActive={store.get('isActive')} selection="Return Journey?" />))
  .add('complex selection', () => (
    <Card style={{ maxWidth: '399px', padding: '10px 10px' }}>
      <Selection
        onClick={clickFunc}
        isActive={store.get('isActive')}
        selection={(
          <Group centerContent>
            <Title className={styles.title} title="Child seat" type="display" subtitle="Baby car seat for children aged 0-36 months" />
            <NumberSelector className={styles.number_selector} />
          </Group>
      )}
      />
    </Card>))
  .add('Example (checkbox group with node selections)', () => (
    <Group isVertical stretchContent>
      <Card canBeTogether={false} style={{ width: '500px', padding: '10px 10px' }}>
        <Selection
          onClick={clickFunc}
          isActive={store.get('isActive')}
          selection={(
            <Group centerContent className={styles.group}>
              <Title className={styles.title} title="Child seat" type="display" subtitle="Baby car seat for children aged 0-36 months" />
              <NumberSelector onChange={change} value={store.get('value')} className={styles.number_selector} />
              <Title type="priceLarge" title={`${store.get('value') * 10}$`} />
            </Group>
        )}
        />
      </Card>
      <Card canBeTogether={false} style={{ width: '500px', padding: '10px 10px' }}>
        <Selection
          onClick={clickFunc1}
          isActive={store.get('isActive1')}
          selection={(
            <Group centerContent className={styles.group}>
              <Title className={styles.title} title="Plant a tree" type="display" subtitle="We know that this is the real reason for using this app" />
              <NumberSelector onChange={change1} value={store.get('value1')} className={styles.number_selector} />
              <Title type="priceLarge" title={`${store.get('value1') * 3.99}$`} />
            </Group>
        )}
        />
      </Card>
      <Card canBeTogether={false} style={{ width: '500px', padding: '10px 10px' }}>
        <Selection
          onClick={clickFunc1}
          isDisabled
          isActive={store.get('isActive1')}
          selection={(
            <Group centerContent className={styles.group}>
              <Title className={styles.title} title="Plant a tree" type="display" subtitle="No tree for you!" />
              <NumberSelector onChange={change1} value={store.get('value1')} className={styles.number_selector} />
              <Title type="priceLarge" title={`${store.get('value1') * 3.99}$`} />
            </Group>
        )}
        />
      </Card>
    </Group>))
  .add('Example (radio group with node selections)', () => (
    <Group isVertical stretchContent>
      <Card canBeTogether={false} style={{ width: '500px', padding: '10px 10px' }}>
        <Selection
          type="radio"
          onClick={clickFunc3}
          isActive={store.get('isActive3')}
          selection={(
            <Group centerContent className={styles.group}>
              <Title className={styles.title} title="Child seat" type="display" subtitle="Baby car seat for children aged 0-36 months" />
              <NumberSelector onChange={change} value={store.get('value')} className={styles.number_selector} />
              <Title type="priceLarge" title={`${store.get('value') * 10}$`} />
            </Group>
          )}
        />
      </Card>
      <Card canBeTogether={false} style={{ width: '500px', padding: '10px 10px' }}>
        <Selection
          type="radio"
          onClick={clickFunc4}
          isActive={store.get('isActive4')}
          selection={(
            <Group centerContent className={styles.group}>
              <Title className={styles.title} title="Plant a tree" type="display" subtitle="We know that this is the real reason for using this app" />
              <NumberSelector onChange={change1} value={store.get('value1')} className={styles.number_selector} />
              <Title type="priceLarge" title={`${store.get('value1') * 3.99}$`} />
            </Group>
          )}
        />
      </Card>
      <Card canBeTogether={false} style={{ width: '500px', padding: '10px 10px' }}>
        <Selection
          type="radio"
          onClick={clickFunc5}
          isDisabled
          isActive={store.get('isActive5')}
          selection={(
            <Group centerContent className={styles.group}>
              <Title className={styles.title} title="Plant a tree" type="display" subtitle="No tree for you!" />
              <NumberSelector onChange={change1} value={store.get('value1')} className={styles.number_selector} />
              <Title type="priceLarge" title={`${store.get('value1') * 3.99}$`} />
            </Group>
          )}
        />
      </Card>
    </Group>));
