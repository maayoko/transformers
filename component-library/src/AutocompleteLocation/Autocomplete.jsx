import React from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import Input from '../Input/Input';
import styles from './Autocomplete.module.scss';
import Menu from './Menu';
import { getNormalized } from './util';
import { enabledOnly } from '../util';
import Item from './Item';
import Loader from '../Loader/Loader';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      previouslySelected: false,
      keyboardHighlighted: null,
    };
  }

  @boundMethod
  setRef(element) {
    if (element) {
      this.input = element;
    }
  }

  @boundMethod
  @enabledOnly
  selectedElement(item) {
    const { onChange, getItemLabel } = this.props;
    this.setState({
      open: false,
      previouslySelected: true,
      keyboardHighlighted: null,
      ignoreBlur: false,
    }, () => {
      onChange(getItemLabel(item), item);
      if (this.input) {
        this.input.focus();
      }
    });
  }

  @boundMethod
  @enabledOnly
  handleInputFocus() {
    const { previouslySelected } = this.state;
    if (!previouslySelected) {
      this.setState({
        open: true,
      });
    }
  }

  @boundMethod
  @enabledOnly
  handleInputChange(event) {
    const { onChange } = this.props;
    const newValue = event.target.value;
    this.setState({
      previouslySelected: false,
      open: true,
    }, () => {
      if (newValue !== null && newValue !== undefined) {
        onChange(newValue);
      }
    });
  }

  @boundMethod
  @enabledOnly
  handleInputBlur() {
    const { ignoreBlur } = this.state;
    if (!ignoreBlur) {
      this.setState({
        open: false,
        previouslySelected: false,
      });
    }
  }

  @boundMethod
  @enabledOnly
  handleKeys(event) {
    const evt = event || window.event;
    const charCode = evt.keyCode || evt.which;
    if (charCode === 27) {
      this.input.blur();
    } else if (charCode === 40) {
      const { items } = this.props;
      const visible = items.filter(t => this.isContained(t)[0]).length;
      this.setState(prev => ({
        keyboardHighlighted: prev.keyboardHighlighted === null ? 0
          : (prev.keyboardHighlighted + 1) % visible,
      }));
    } else if (charCode === 38) {
      const { items } = this.props;
      const visible = items.filter(t => this.isContained(t)[0]).length;
      this.setState(prev => ({
        keyboardHighlighted: prev.keyboardHighlighted - 1 < 0 ? visible - 1
          : prev.keyboardHighlighted - 1,
      }));
    } else if (charCode === 13) {
      const { keyboardHighlighted } = this.state;
      if (keyboardHighlighted === null) {
        this.input.blur();
      } else {
        const { items } = this.props;
        this.selectedElement(items.filter(t => this.isContained(t)[0])[keyboardHighlighted]);
      }
    }
  }

  @boundMethod
  @enabledOnly
  handleMenuEnter() {
    this.setState({
      ignoreBlur: true,
    });
  }

  @boundMethod
  @enabledOnly
  handleMenuLeave() {
    this.setState({
      ignoreBlur: false,
    });
  }

  @boundMethod
  isOpen() {
    // eslint-disable-next-line react/destructuring-assignment
    return 'open' in this.props ? this.props.open : this.state.open;
  }

  render() {
    const {
      customInput,
      items,
      isLoading,
      noElementsLabel,
      className,
      getItemLabel,
      value,
      isDisabled,
    } = this.props;
    const { keyboardHighlighted } = this.state;
    const open = this.isOpen();
    return (
      <div
        className={`${styles.autocomplete} ${className}`}
        onBlur={this.handleInputBlur}
      >
        {React.cloneElement(customInput, {
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur,
          isDisabled,
          onChange: this.handleInputChange,
          value,
          onKeyDown: this.handleKeys,
          isFocused: open,
          refFunc: this.setRef,
          // sufixElement: isLoading ? (
          //   <Loader />) : undefined,
          // ...(isLoading && { icon: undefined }),
        })}
        {
          open && (
          <Menu
            className={styles.menu}
            onMouseEnter={this.handleMenuEnter}
            onMouseLeave={this.handleMenuLeave}
            isLoading={isLoading}
            noElementsLabel={noElementsLabel}
          >
            {
              items && items.reduce((all, item, index) => {
                all.push(<Item
                  key={JSON.stringify(item)}
                  highlited={keyboardHighlighted === index}
                  data={item}
                  index={index}
                  label={getItemLabel(item)}
                  className={styles.item}
                  onClick={this.selectedElement}
                />);
                return all;
              }, [])
            }
          </Menu>)
        }
      </div>);
  }
}

Autocomplete.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    matched_substrings: PropTypes.arrayOf(PropTypes.shape({
      length: PropTypes.number,
      offset: PropTypes.number,
    })),
  })),
  customInput: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  noElementsLabel: PropTypes.string,
};

Autocomplete.defaultProps = {
  className: '',
  value: '',
  isDisabled: false,
  onChange: () => {},
  customInput: <Input label="pickup location" placeholder="Type your location..." icon="plane" />,
  items: [
    {
      description: 'Sielska 32, Poznań, Poland',
      id: '6f396a2ed426f5ba72438d48c98c1d51f4b08915',
      matched_substrings: [
        {
          length: 7,
          offset: 0,
        },
        {
          length: 2,
          offset: 8,
        },
      ],
      place_id: 'ChIJY4gj7i5FBEcR9Zk8W2gCvLc',
      reference: 'ChIJY4gj7i5FBEcR9Zk8W2gCvLc',
      structured_formatting: {
        main_text: 'Sielska 32',
        main_text_matched_substrings: [
          {
            length: 7,
            offset: 0,
          },
          {
            length: 2,
            offset: 8,
          },
        ],
        secondary_text: 'Poznań, Poland',
      },
      terms: [
        {
          offset: 0,
          value: 'Sielska',
        },
        {
          offset: 8,
          value: '32',
        },
        {
          offset: 12,
          value: 'Poznań',
        },
        {
          offset: 20,
          value: 'Poland',
        },
      ],
      types: ['premise', 'geocode'],
    },
    {
      description: 'Selská 32, Brno-Maloměřice a Obřany, Czechia',
      id: '5cf80bbcedaa19c14ff51b1aea02ee2676493dc2',
      matched_substrings: [
        {
          length: 6,
          offset: 0,
        },
        {
          length: 2,
          offset: 7,
        },
      ],
      place_id: 'ChIJRyDbsoSUEkcRQQji8JgoYZE',
      reference: 'ChIJRyDbsoSUEkcRQQji8JgoYZE',
      structured_formatting: {
        main_text: 'Selská 32',
        main_text_matched_substrings: [
          {
            length: 6,
            offset: 0,
          },
          {
            length: 2,
            offset: 7,
          },
        ],
        secondary_text: 'Brno-Maloměřice a Obřany, Czechia',
      },
      terms: [
        {
          offset: 0,
          value: 'Selská',
        },
        {
          offset: 7,
          value: '32',
        },
        {
          offset: 11,
          value: 'Brno-Maloměřice a Obřany',
        },
        {
          offset: 37,
          value: 'Czechia',
        },
      ],
      types: ['street_address', 'geocode'],
    },
    {
      description: 'Selska cesta 32, Zagreb, Croatia',
      id: 'd71eae53ab9c647a549d01bb550b62692430e000',
      matched_substrings: [
        {
          length: 6,
          offset: 0,
        },
        {
          length: 2,
          offset: 13,
        },
      ],
      place_id: 'ChIJsUFv9M_WZUcRRF5GhqEU3IU',
      reference: 'ChIJsUFv9M_WZUcRRF5GhqEU3IU',
      structured_formatting: {
        main_text: 'Selska cesta 32',
        main_text_matched_substrings: [
          {
            length: 6,
            offset: 0,
          },
          {
            length: 2,
            offset: 13,
          },
        ],
        secondary_text: 'Zagreb, Croatia',
      },
      terms: [
        {
          offset: 0,
          value: 'Selska cesta',
        },
        {
          offset: 13,
          value: '32',
        },
        {
          offset: 17,
          value: 'Zagreb',
        },
        {
          offset: 25,
          value: 'Croatia',
        },
      ],
      types: ['street_address', 'geocode'],
    },
    {
      description: 'Selská 32, Bludovice, Havířov, Czechia',
      id: 'bf03e0d08337deca53016cb78c236b6d9d0658c3',
      matched_substrings: [
        {
          length: 6,
          offset: 0,
        },
        {
          length: 2,
          offset: 7,
        },
      ],
      place_id: 'ChIJ_-yNdib5E0cRgBNFrKDg12M',
      reference: 'ChIJ_-yNdib5E0cRgBNFrKDg12M',
      structured_formatting: {
        main_text: 'Selská 32',
        main_text_matched_substrings: [
          {
            length: 6,
            offset: 0,
          },
          {
            length: 2,
            offset: 7,
          },
        ],
        secondary_text: 'Bludovice, Havířov, Czechia',
      },
      terms: [
        {
          offset: 0,
          value: 'Selská',
        },
        {
          offset: 7,
          value: '32',
        },
        {
          offset: 11,
          value: 'Bludovice',
        },
        {
          offset: 22,
          value: 'Havířov',
        },
        {
          offset: 31,
          value: 'Czechia',
        },
      ],
      types: ['street_address', 'geocode'],
    },
    {
      description: 'Selska ulica 32, Sesvete, Croatia',
      id: '7c47ea2ab65c6ad0f9004761d02a5a10095dc495',
      matched_substrings: [
        {
          length: 6,
          offset: 0,
        },
        {
          length: 2,
          offset: 13,
        },
      ],
      place_id: 'ChIJvY9Rb_x5ZkcRxxK75X29W3c',
      reference: 'ChIJvY9Rb_x5ZkcRxxK75X29W3c',
      structured_formatting: {
        main_text: 'Selska ulica 32',
        main_text_matched_substrings: [
          {
            length: 6,
            offset: 0,
          },
          {
            length: 2,
            offset: 13,
          },
        ],
        secondary_text: 'Sesvete, Croatia',
      },
      terms: [
        {
          offset: 0,
          value: 'Selska ulica',
        },
        {
          offset: 13,
          value: '32',
        },
        {
          offset: 17,
          value: 'Sesvete',
        },
        {
          offset: 26,
          value: 'Croatia',
        },
      ],
      types: ['street_address', 'geocode'],
    },
  ],
  getItemLabel: i => i.description,
  isLoading: false,
  noElementsLabel: 'No results found.',
};

export default Autocomplete;
