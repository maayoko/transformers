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
  highlight() {
    const { data, label } = this.props;
    const d = [];
    let lastValue = 0;
    for (let i = 0; i < data.matched_substrings.length; i += 1) {
      const currentIndex = data.matched_substrings[i].offset;
      if (currentIndex === 0) {
        d.push((
          <span key={`bold${currentIndex}`} className={styles.bold}>
            { label.substring(0, data.matched_substrings[i].length)}
          </span>));
        lastValue = data.matched_substrings[i].length;
      } else {
        d.push((
          <span key={`nobold${currentIndex}`}>
            { label.substring(lastValue, currentIndex)}
          </span>
        ));
        d.push((
          <span key={`bold${currentIndex}`} className={styles.bold}>
            { label.substring(currentIndex, currentIndex + data.matched_substrings[i].length)}
          </span>));
        lastValue = currentIndex + data.matched_substrings[i].length;
      }
    }
    if (lastValue !== label.length) {
      d.push(<span key={`nobold${lastValue}`}>{ label.substring(lastValue)}</span>);
    }
    return d;
  }

  render() {
    const {
      className,
      highlited,
    } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        role="presentation"
        onClick={this.onClick}
        className={`${styles.item} ${className} ${highlited ? styles.highlited : defaultClassName}`}
      >
        { this.highlight() }
      </div>
    );
  }
}

Item.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    description: PropTypes.string,
    matched_substrings: PropTypes.arrayOf(PropTypes.shape({
      length: PropTypes.number,
      offset: PropTypes.number,
    })),
  }).isRequired,
  label: PropTypes.string.isRequired,
  highlited: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Item.defaultProps = {
  className: '',
  highlited: false,
};

export default Item;
