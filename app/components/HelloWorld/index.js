import React from 'react';
import styles from './styles.css';
import Text from '../Text';

const HelloWorld = () => (
  <div>
    <div className={styles.header}>
      <h1 className={styles.pulseAnimation}>Hello world!</h1>
    </div>

    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>

    <div className={styles.footer}>
      <p className={styles.pulseAnimation} style={{ textAlign: 'center' }}>
        Footer
      </p>
    </div>
  </div>
);

export default HelloWorld;
