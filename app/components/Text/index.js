import React, { PropTypes } from 'react';
import styles from './styles.css';

const Text = ({ children }) => (
  <p className={styles.body}>
    { children }
  </p>
);

Text.propTypes = {
  children: PropTypes.node
};

export default Text;
