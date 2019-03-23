import React from 'react';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
import Button from '../Button/Button';
import Group from '../Group/Group';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Input from '../Input/Input';
import styles from './Stripe.module.scss';

export default class Stripe extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card>
          <Title type="display" title="Credit card" subtitle="Safe money transfer via Stripe, Visa, Maestro, Discover, American Express" />
          <Group isVertical fullWidth>
            <Input fullWidth label="drop off" />
            <Group fullWidth style={{ margin: '0', justifyContent: 'flex-start' }}>
              <Group removeGap style={{ flexBasis: '60%' }} className={`${styles['base-input-group']}`}>
                <label className={styles.label}>Name</label>
              </Group>
              <Group removeGap className={`${styles['base-input-group']}`}>
                <label className={styles.label}>Card Expiry</label>
              </Group>
              <Group removeGap className={`${styles['base-input-group']}`}>
                <label htmlFor="cvc" className={styles.label}>CVC</label>
              </Group>
            </Group>
          </Group>
        </Card>
        <Button color="primary">
          <LabeledIcon icon="car" label="Book a ride" />
        </Button>
      </form>
    );
  }

}
