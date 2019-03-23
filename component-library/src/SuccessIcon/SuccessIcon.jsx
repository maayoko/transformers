import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import styles from './SuccessIcon.module.scss';

const SuccessIcon = ({
  className,
  style,
  isLoading,
  isSuccess,
}) => (
  <div style={style} className={`${styles.icon} ${className}`}>
    <Loader className={isLoading ? styles.visible : ''} />
    <svg className={(isSuccess === true && !isLoading) ? styles.visible : ''} width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8714 7.3588L9.29762 13.9326L6.39048 11.0255C6.18095 10.8159 5.86667 10.8159 5.65714 11.0255C5.44762 11.235 5.44762 11.5493 5.65714 11.7588L8.93095 15.0326C9.03571 15.1374 9.16667 15.1898 9.29762 15.1898C9.42857 15.1898 9.55952 15.1374 9.66429 15.0326L16.6048 8.09214C16.8143 7.88261 16.8143 7.56833 16.6048 7.3588C16.3952 7.14928 16.081 7.14928 15.8714 7.3588Z" fill="#5ACC50" />
      <path d="M11 0C5.02857 0 0 5.02857 0 11C0 16.9714 5.02857 22 11 22C16.9714 22 22 16.9714 22 11C22 5.02857 16.9714 0 11 0ZM11 20.9524C5.60476 20.9524 1.04762 16.3952 1.04762 11C1.04762 5.60476 5.60476 1.04762 11 1.04762C16.3952 1.04762 20.9524 5.60476 20.9524 11C20.9524 16.3952 16.3952 20.9524 11 20.9524Z" fill="#5ACC50" />
    </svg>
    <svg className={(isSuccess === false && !isLoading) ? styles.visible : ''} width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.64827 14.3524C7.47469 14.1788 7.47469 13.8974 7.64827 13.7238L13.7245 7.64761C13.898 7.47404 14.1795 7.47403 14.353 7.64761C14.5266 7.82119 14.5266 8.10261 14.353 8.27618L8.27684 14.3524C8.10327 14.5259 7.82185 14.5259 7.64827 14.3524Z" fill="#EB5757" />
      <path d="M14.3524 14.3522C14.1788 14.5258 13.8974 14.5258 13.7238 14.3522L7.64761 8.27603C7.47404 8.10245 7.47403 7.82103 7.64761 7.64746C7.82119 7.47388 8.10261 7.47388 8.27618 7.64746L14.3524 13.7236C14.5259 13.8972 14.5259 14.1786 14.3524 14.3522Z" fill="#EB5757" />
      <path d="M11 0C5.02857 0 0 5.02857 0 11C0 16.9714 5.02857 22 11 22C16.9714 22 22 16.9714 22 11C22 5.02857 16.9714 0 11 0ZM11 20.9524C5.60476 20.9524 1.04762 16.3952 1.04762 11C1.04762 5.60476 5.60476 1.04762 11 1.04762C16.3952 1.04762 20.9524 5.60476 20.9524 11C20.9524 16.3952 16.3952 20.9524 11 20.9524Z" fill="#EB5757" />
    </svg>
  </div>);

SuccessIcon.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  style: PropTypes.shape({}),
};

SuccessIcon.defaultProps = {
  className: null,
  isLoading: false,
  isSuccess: undefined,
  style: {},
};

export default SuccessIcon;
