import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './Dropdown.module.scss';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
import Button from '../Button/Button';

class Item extends React.Component {
  @boundMethod
  onSelect() {
    const {
      label, icon, index, onSelect, flag,
    } = this.props;
    onSelect(label, icon, flag, index);
  }

  render() {
    const { label, icon, flag } = this.props;
    return (
      <Button position="left" variant="text" onClick={this.onSelect}>
        <LabeledIcon isReverse icon={icon} flag={flag} label={label} />
      </Button>
    );
  }
}

Item.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  flag: PropTypes.string,
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func,
};

Item.defaultProps = {
  icon: null,
  onSelect: () => {},
  flag: null,
};

export default Item;
