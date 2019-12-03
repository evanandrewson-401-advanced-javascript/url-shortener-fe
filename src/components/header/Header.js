import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <section className={styles.Header}>
      <nav>
        <Link to='/input'>Input</Link>
        <Link to='/links'>Your links</Link>
      </nav>
      <h1>URL shortener</h1>
    </section>
  );
};

export default Header;
