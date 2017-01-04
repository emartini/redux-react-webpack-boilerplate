import React, { PropTypes } from 'react';
import styles from './styles.css';

const Icon = ({ icon, size, color }) => (
  <svg
    aria-hidden="true"
    className={`${styles.icon} ${styles[color]}`}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 1024 1024"
  >
    <path d={icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
  color: 'black'
};

export default Icon;
