/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import docs from './README.md';
import calendar from '../../assets/svgs/calendar.svg';
import carWifi from '../../assets/svgs/car-wifi.svg';
import car from '../../assets/svgs/car.svg';
import user from '../../assets/svgs/user.svg';
import carousel from '../../assets/svgs/carousel-down.svg';
import clock from '../../assets/svgs/clock.svg';
import lugagge from '../../assets/svgs/luggage.svg';
import map from '../../assets/svgs/map.svg';
import plane from '../../assets/svgs/plane.svg';
import tree from '../../assets/svgs/tree.svg';
import card from '../../assets/svgs/card.svg';
import info from '../../assets/svgs/info.svg';


storiesOf('SVG', module)
  .addDecorator(withDocs(docs))
  .add('demo', () => (
    <div>
      <img src={calendar} />
      <img src={car} />
      <img src={user} />
      <img src={clock} />
      <img src={lugagge} />
      <img src={plane} />
      <img src={card} />
      <img src={info} />
      <img src={carWifi} />
      <img src={tree} />
      <img src={map} />
    </div>
  ))
  .add('carousel', () => (
    <div>
      <img src={carousel} />
      <img style={{ transform: 'rotate(90deg)' }} src={carousel} />
      <img style={{ transform: 'rotate(180deg)' }} src={carousel} />
      <img style={{ transform: 'rotate(270deg)' }} src={carousel} />
    </div>
  ));
