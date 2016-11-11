import React, { PropTypes, Children } from 'react';
import NavigationBar from '../../components/NavigationBar';
import styles from './styles.css';

const routes = [
  { name: 'Hello World!', to: '/' },
  { name: 'Images', to: '/images' },
  { name: 'Nowhere', to: '/nowhere' }
];

const App = (props) => (
  <div>
    <NavigationBar routes={routes} />
    <main className={styles.main}>
      {Children.toArray(props.children)}
    </main>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
