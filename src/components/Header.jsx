import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar__item}>Todos</div>
      </nav>
    </header>
  );
};

export default Header;
