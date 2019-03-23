import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './Autocomplete.module.scss';
import { getIndices } from './util';

const defaultClassName = '';

class Item extends React.Component {
  @boundMethod
  onClick() {
    const { onClick, data } = this.props;
    onClick(data);
  }

  @boundMethod
  highlight(display) {
    const { value, normalizedDisplay } = this.props;
    if (value === '') return display;
    const indices = getIndices(value, normalizedDisplay);
    const d = [];
    let lastValue = 0;
    const { length } = value;
    for (let i = 0; i < indices.length; i += 1) {
      const currentIndex = indices[i];
      if (currentIndex === 0) {
        d.push((
          <span key={`bold${currentIndex}`} className={styles.bold}>
            { display.substring(0, length)}
          </span>));
        lastValue = length;
      } else {
        d.push((
          <span key={`nobold${currentIndex}`}>
            { display.substring(lastValue, currentIndex)}
          </span>
        ));
        d.push((
          <span key={`bold${currentIndex}`} className={styles.bold}>
            { display.substring(currentIndex, currentIndex + length)}
          </span>));
        lastValue = currentIndex + length;
      }
    }
    if (lastValue !== display.length) {
      d.push(<span key={`nobold${lastValue}`}>{ display.substring(lastValue)}</span>);
    }
    return d;
  }

  render() {
    const {
      className,
      label,
      highlited,
    } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        role="presentation"
        onClick={this.onClick}
        className={`${styles.item} ${className} ${highlited ? styles.highlited : defaultClassName}`}
      >
        { this.highlight(label) }
      </div>
    );
  }
}

Item.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  highlited: PropTypes.bool,
  value: PropTypes.string,
  normalizedDisplay: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Item.defaultProps = {
  className: '',
  highlited: false,
  value: '',
};

export default Item;
