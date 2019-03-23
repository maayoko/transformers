import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import volvo from './volvo.svg';
import car from './car-gallery.svg';
import Group from '../Group/Group';

const DummyContent = ({
  className,
  icon,
  onClick,
  onLoad,
  text,
  buttonClass,
  activeContent,
  onButtonClick,
  index,
  value,
  buttonText,
}) => (
  <Group onClick={() => onClick(index)} isVertical centerContent style={{ width: '100%', justifyContent: 'space-between' }}>
    <h1 style={{ textAlign: 'right', color: '#A7DD4E', width: '100%' }}> {value}</h1>
    <img style={{ width: '100%' }} onLoad={onLoad} src={car} />
    <h3> {text}</h3>
    <Button className={buttonClass} onClick={onButtonClick} color={activeContent? 'primary' : 'default'}>{buttonText}</Button>
  </Group>
);

DummyContent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

DummyContent.defaultProps = {
  className: null,
  onClick: () => {},
};

export default DummyContent;
