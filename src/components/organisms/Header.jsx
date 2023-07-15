import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar__item}>Todos</div>
      </nav>
    </header>
  );
}

export default Header;
