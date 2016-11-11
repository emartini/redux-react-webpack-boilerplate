import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

const renderRoutes = (routes) => (
  routes.map((route, idx) => (
    <li className={styles.item} key={idx}>
      <Link
        className={styles.link}
        to={route.to}
        key={`route-${idx}`}
        activeClassName={styles.linkActive}
      >
        {route.name}
      </Link>
    </li>
  ))
);

const NavigationBar = ({ routes }) => (
  <nav className={styles.wrapper}>
    <ul className={styles.body}>
      { renderRoutes(routes) }
    </ul>
  </nav>
);

NavigationBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default NavigationBar;
