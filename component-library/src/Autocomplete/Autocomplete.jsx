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

  @boundMethod
  isContained(item) {
    const { getItemLabel, value } = this.props;
    const display = getItemLabel(item);
    const normalizedDisplay = getNormalized(display);
    const normalizedValue = getNormalized(value);
    return [normalizedDisplay.indexOf(normalizedValue) !== -1, normalizedDisplay, normalizedValue];
  }

  render() {
    const {
      customInput,
      items,
      getItemLabel,
      isLoading,
      noElementsLabel,
      className,
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
              items.reduce((all, item, index) => {
                const result = this.isContained(item);
                if (result[0]) {
                  all.push(<Item
                    key={JSON.stringify(item)}
                    highlited={keyboardHighlighted === index}
                    data={item}
                    value={result[2]}
                    normalizedDisplay={result[1]}
                    label={getItemLabel(item)}
                    index={index}
                    className={styles.item}
                    onClick={this.selectedElement}
                  />);
                }
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
  items: PropTypes.arrayOf(PropTypes.shape({})),
  customInput: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  getItemLabel: PropTypes.func,
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
    { label: 'Crème Brulée' },
    { label: 'Brulée Crème Brulée' },
    { label: 'Crème Crème Crème' },
    { label: 'Crème Brulée Crème Brulée' },
    { label: 'CrèmeCrème Brulée' },
  ],
  getItemLabel: i => i.label,
  isLoading: false,
  noElementsLabel: 'No results found.',
};

export default Autocomplete;
