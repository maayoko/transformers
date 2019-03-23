/* eslint-disable operator-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './LocationList.module.scss';
import Title from '../Title/Title';
import Icon from '../Icon/Icon';
import Group from '../Group/Group';

const LocationList = ({
  className,
  locations,
}) => (
  <Group isVertical removeGap className={`${styles.location_list} ${className}`}>
    {
      locations && locations.map((data, index) => (
        <Group key={data.location} className={styles.group} stretchContent>
          <Icon className={index === 0 ? styles.icon_first : styles.icon} icon={data.icon} />
          <Title type="display" subtitle={data.location} title={data.label} />
        </Group>
      ))
    }
  </Group>
);

LocationList.propTypes = {
  className: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

LocationList.defaultProps = {
  className: null,
};

export default LocationList;
