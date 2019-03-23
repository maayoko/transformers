import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import Group from '../Group/Group';
import styles from './Gallery.module.scss';
import Content from './Content';
import Arrow from './Arrow';

const defaultClassName = '';

const getStyle = (direction, sliding, elementWidth, distance = 1) => {
  let style = {};
  if (sliding) {
    style = {
      transition: 'none',
      transform: (direction === 'previous' ? `translate(calc(-${distance} * ${elementWidth}px))` : `translate(calc(${distance} * ${elementWidth}px))`),
    };
  } else {
    style = {
      transition: `transform ${0.6 * 1}s ease`,
      transform: 'translate(0%)',
    };
  }
  return style;
};


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.elementsLoaded = 0;
    this.state = {
      activeIndex: 0,
      sliding: false,
      direction: 'next',
      elementWidth: 0,
      elementHeight: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.calculateResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateResize);
  }

  @boundMethod
  setRef(refElement) {
    if (refElement) {
      this.slick = refElement;
      this.calculateResize();
    }
  }

  @boundMethod
  getChildrenCount() {
    const { children } = this.props;
    const visibleChildren = this.getCurrentVisibleChildren();
    const count = React.Children.count(children);
    if (count >= visibleChildren) return count * 2;
    return count;
  }

  @boundMethod
  getOrder(itemIndex) {
    const { activeIndex } = this.state;
    const visibleChildren = this.getCurrentVisibleChildren();
    const numItems = this.getChildrenCount();
    let value;
    if (itemIndex - activeIndex < 0) {
      value = numItems - Math.abs(itemIndex - activeIndex);
    } else {
      value = itemIndex - activeIndex;
    }
    return (value + visibleChildren /* - 1 */) % numItems;
  }

  @boundMethod
  getCurrentVisibleChildren() {
    const { visibleChildren } = this.props;
    const mobileMaxWidth = visibleChildren.mobileMaxWidth || styles.mobileMaxWidth;
    const tabletPortraitMinWidth = visibleChildren.tabletPortraitMinWidth
    || styles.tabletPortraitMinWidth;
    const tabletLandscapeMinWidth = visibleChildren.tabletLandscapeMinWidth
    || styles.tabletLandscapeMinWidth;
    const desktopMinWidth = visibleChildren.desktopMinWidth
    || styles.desktopMinWidth;
    let visibleCurrently = 0;

    if (window.innerWidth < mobileMaxWidth) {
      visibleCurrently = visibleChildren.mobile;
    } else if (window.innerWidth >= tabletPortraitMinWidth
      && window.innerWidth < tabletLandscapeMinWidth) {
      visibleCurrently = visibleChildren.tabletPortrait;
    } else if (window.innerWidth >= tabletLandscapeMinWidth
      && window.innerWidth < desktopMinWidth) {
      visibleCurrently = visibleChildren.tabletLandscape;
    } else {
      visibleCurrently = visibleChildren.desktop;
    }
    return visibleCurrently;
  }

  @boundMethod
  calculateResize() {
    const visibleChildren = this.getCurrentVisibleChildren();

    const padding = (2 * parseInt(styles.arrowWidth, 10));
    this.setState({
      elementWidth: (this.slick.offsetWidth - padding) / visibleChildren,
      elementHeight: this.slick.offsetHeight,
    });
  }

  @boundMethod
  doSliding(direction, position, distance) {
    this.setState({
      sliding: true,
      direction,
      distance,
      activeIndex: position,
    });
    setTimeout((() => {
      this.setState({
        sliding: false,
      });
    }), 10);
  }

  @boundMethod
  goToNext() {
    const { activeIndex } = this.state;
    const count = this.getChildrenCount();
    if (count === 1) return;
    this.doSliding('next', activeIndex === count - 1 ? 0 : activeIndex + 1, 1);
  }

  @boundMethod
  goTo(index) {
    const visibleChildren = this.getCurrentVisibleChildren();
    const count = this.getChildrenCount();
    const { activeIndex } = this.state;
    if (count === 1) return;
    const o1 = this.getOrder(index);
    const o2 = this.getOrder(activeIndex);
    const distance = Math.abs(o1 - o2);
    if (index !== activeIndex) {
      this.doSliding(activeIndex !== index + 1 ? 'next' : 'previous', index, distance % visibleChildren || 1);
    }
  }

  @boundMethod
  goToPrevious() {
    const { activeIndex } = this.state;
    const count = this.getChildrenCount();
    if (count === 1) return;
    this.doSliding('previous', activeIndex === 0 ? count - 1 : activeIndex - 1, 1);
  }

  render() {
    const {
      sliding,
      direction,
      distance,
      elementWidth,
      elementHeight,
      activeIndex,
    } = this.state;
    const {
      hasArrows,
      children,
      className,
      isDisabled,
    } = this.props;
    const visibleChildren = this.getCurrentVisibleChildren();
    let containerStyling = {};
    if (elementWidth !== 0) {
      containerStyling = getStyle(direction, sliding, elementWidth, distance);
      if (children.length >= visibleChildren) {
        containerStyling.left = `-${elementWidth * (visibleChildren)}px`;
      }
    }
    const isLessChildren = children.length < visibleChildren;
    return (
      <Group
        className={`${styles.container} ${className} ${isDisabled ? styles.disabled : defaultClassName}`}
        removeGap
        centerContent
      >
        { hasArrows && <Arrow isDisabled={isLessChildren} style={{ height: elementHeight }} className={styles.arrow_left} onClick={this.goToPrevious} icon="" /> }
        <div className={styles.wrapper} ref={this.setRef}>
          <Group
            removeGap
            stretchContent
            style={containerStyling}
            className={styles.slider}
          >
            {
              React.Children.map(children, (child, index) => (
                <Content
                  isDisabled={isLessChildren}
                  onClick={this.goTo}
                  isActive={!isDisabled && (index === activeIndex || isLessChildren)}
                  index={index}
                  style={{
                    order: this.getOrder(index),
                    width: elementWidth !== 0 ? elementWidth : undefined,
                  }}
                >
                  {child}

                </Content>))
            }
            {
              children.length >= visibleChildren
              && React.Children.map(children, (child, index) => (
                <Content
                  onClick={this.goTo}
                  isActive={index + children.length === activeIndex}
                  index={index + children.length}
                  style={{
                    order: this.getOrder(index + children.length),
                    width: elementWidth !== 0 ? elementWidth : undefined,
                  }}
                >
                  {child}

                </Content>))
            }
          </Group>
        </div>
        { hasArrows && <Arrow isDisabled={isLessChildren} style={{ height: elementHeight }} className={styles.arrow_right} onClick={this.goToNext} icon="" />}
      </Group>
    );
  }
}

Gallery.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]).isRequired,
  hasArrows: PropTypes.bool,
  isDisabled: PropTypes.bool,
  visibleChildren: PropTypes.shape({
    mobile: PropTypes.number.isRequired,
    mobileMaxWidth: PropTypes.number,
    tabletPortrait: PropTypes.number.isRequired,
    tabletPortraitMinWidth: PropTypes.number,
    tabletLandscape: PropTypes.number.isRequired,
    tabletLandscapeMinWidth: PropTypes.number,
    desktop: PropTypes.number.isRequired,
    desktopMinWidth: PropTypes.number,
  }),
};

Gallery.defaultProps = {
  className: '',
  hasArrows: true,
  isDisabled: false,
  visibleChildren: {
    mobile: 1,
    tabletPortrait: 3,
    tabletLandscape: 3,
    desktop: 5,
  },
};

export default Gallery;
