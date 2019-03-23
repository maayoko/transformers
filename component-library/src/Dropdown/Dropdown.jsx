/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { boundMethod } from 'autobind-decorator';
import styles from './Dropdown.module.scss';
import Card from '../Card/Card';
import LabeledIcon from '../LabeledIcon/LabeledIcon';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Group from '../Group/Group';
import Item from './Item';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      dropdownPosition: 'bottom',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
    window.addEventListener('resize', this.onWindowScroll);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    window.removeEventListener('scroll', this.onWindowScroll);
    window.removeEventListener('resize', this.onWindowScroll);
  }

  @boundMethod
  onWindowScroll() {
    const { showList } = this.state;
    if (!showList) {
      const node = findDOMNode(this.selectInst);

      if (!node) return;
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const instOffsetWithMenu = rect.bottom + 180;
      const instOffsetWithMenuNegative = rect.bottom - 180;
      if (instOffsetWithMenu >= windowHeight && instOffsetWithMenuNegative > 0) {
        this.setState({
          dropdownPosition: 'top',
        });
      } else {
        this.setState({
          dropdownPosition: 'bottom',
        });
      }
    }
  }

  @boundMethod
  onElementSelect(label, icon, flag) {
    const { onChange } = this.props;
    this.setState({
      showList: false,
    }, () => {
      onChange(label, icon, flag);
    });
  }

  @boundMethod
  setRef(refElement) {
    const { refFunc } = this.props;
    this.selectInst = refElement;
    if (refFunc) {
      refFunc(refElement);
    }
  }

  @boundMethod
  toggleShow() {
    const { controlledOpen, isDisabled } = this.props;
    if (this.selectInst && this.selectInst.current) { this.onWindowScroll(); }
    if (!controlledOpen && !isDisabled) {
      this.setState(previousState => ({
        showList: !previousState.showList,
      }));
    }
  }

  render() {
    const {
      showList, dropdownPosition,
    } = this.state;
    const {
      className,
      elements,
      customButton,
      currentIcon,
      currentFlag,
      isDisabled,
      onBlur,
      controlledOpen,
      open,
      currentLabel,
      onClick,
      onFocus,
    } = this.props;
    let openedState = 'show';
    if (!showList) {
      openedState = 'no-show';
    }
    if (controlledOpen) {
      if (open) openedState = 'show';
      else {
        openedState = 'no-show';
      }
    }
    return (
      <div tabIndex="-1" onFocus={onFocus} className={`${styles.dropdown} ${styles[openedState]} ${className} `}>
        {
          customButton && React.cloneElement(customButton, {
            className: styles.button, onClick: this.toggleShow, isDisabled,
          })
        }
        {
          // eslint-disable-next-line operator-linebreak
          !customButton &&
          <Button isDisabled={isDisabled} className={styles.button} onClick={controlledOpen ? onClick : this.toggleShow} position="left" variant="text">
            <LabeledIcon isReverse flag={currentFlag} icon={currentIcon} label={currentLabel} />
            <Icon icon="carousel-down" className={styles.carousel} />
          </Button>
        }
        <Card className={`${styles.card} ${styles[dropdownPosition]}`}>
          <Group refFunc={this.setRef} onBlur={!isDisabled ? onBlur : undefined} className={styles['card-group']} isVertical removeGap stretchContent>
            {
              elements && elements.map(el => <Item
                onSelect={this.onElementSelect}
                key={el.index}
                {...el}
              />)}
          </Group>
        </Card>
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
  controlledOpen: PropTypes.bool,
  currentLabel: PropTypes.string.isRequired,
  currentIcon: PropTypes.string,
  currentFlag: PropTypes.string,
  customButton: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]),
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
  })).isRequired,
  isDisabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  open: PropTypes.bool,
  refFunc: PropTypes.func,
};

Dropdown.defaultProps = {
  className: null,
  controlledOpen: false,
  open: false,
  isDisabled: false,
  onChange: () => {},
  customButton: null,
  currentIcon: null,
  currentFlag: null,
  refFunc: () => {},
  onBlur: () => {},
  onFocus: () => {},
};

export default Dropdown;
