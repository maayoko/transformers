/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import styles from './Gallery.module.scss';


class Content extends Component {
  @boundMethod
  onKeyDown(event) {
    if (event.which === 13 || event.keyCode === 13) {
      const { onClick, index } = this.props;
      onClick(index);
    }
    return true;
  }

  @boundMethod
  onClick() {
    const { onClick, index } = this.props;
    onClick(index);
  }

  @boundMethod
  setRef(refElement) {
    if (refElement) {
      this.slick = refElement;
      const { refFunc } = this.props;
      if (refFunc) {
        refFunc(refElement);
      }
    }
  }

  render() {
    const {
      style,
      onLoad,
      className,
      isActive,
      isDisabled,
      index,
      hasContentLoad,
      children,
    } = this.props;
    return (
      <div
        onClick={!isDisabled ? this.onClick : undefined}
        role="menuitem"
        tabIndex={index}
        onKeyDown={!isDisabled ? this.onKeyDown : undefined}
        style={style}
        className={`${className} ${styles.slider_content} ${isActive ? styles.active : styles.inactive}`}
      >
        {
          React.Children.map(children, child => (
            React.cloneElement(child, {
              onLoad: hasContentLoad ? onLoad : undefined,
              activeContent: isActive,
              index,
            })))
        }
      </div>
    );
  }
}


Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node, PropTypes.string),
  ]).isRequired,
  hasContentLoad: PropTypes.bool,
  index: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onLoad: PropTypes.func,
  refFunc: PropTypes.func,
  style: PropTypes.shape({}),
};

Content.defaultProps = {
  className: '',
  hasContentLoad: false,
  isActive: false,
  isDisabled: false,
  onClick: () => {},
  onLoad: () => {},
  refFunc: () => {},
  style: {},
};

export default Content;
