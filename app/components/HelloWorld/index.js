import React from 'react';
import styles from './styles.css';

import Icon from '../Icon';
import { BUBBLE } from '../Icon/constants';

const HelloWorld = () => (
  <div>
    <div className={styles.header}>
      <h1>Hello world!</h1>
    </div>

    <div className={styles.body}>
      <button>
        <Icon icon={BUBBLE} color="black" />
        Red
      </button>

      <button>
        <Icon icon={BUBBLE} color="blue" />
        Blue
      </button>

      <button className={styles.inProgress}>
        <Icon icon={BUBBLE} color="red" />
        { ' ' }
        Red
      </button>

    </div>

    <div className={styles.footer}>
      Footer
    </div>
  </div>
);

export default HelloWorld;
