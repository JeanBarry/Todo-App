import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar__item}>Todos</div>
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
