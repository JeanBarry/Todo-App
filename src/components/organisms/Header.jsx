import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import styles from './Header.module.css';
import responsive from '../../styles/responsive.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={`${responsive.desktop} ${styles.navbar__item}`}>
          Todos
        </div>
        <button
          type="button"
          className={`${styles.navbar__item} ${styles.button}`}
          onClick={() => {
            signOut(auth);
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
