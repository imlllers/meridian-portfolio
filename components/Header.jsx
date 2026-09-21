import Button from './Button/Button';
import styles from '../styles/Home.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="MERIDIAN" className={styles.logo} />
      <nav className={styles.nav} aria-label="Основная навигация">
        <a className={`${styles.navLink} ${styles.active}`} href="#home">
          Главная
        </a>
        <a className={styles.navLink} href="#projects">
          Проекты
        </a>
        <a className={styles.navLink} href="#contact">
          Контакты
        </a>
      </nav>
      <Button variant="primary" size="sm">
        Нанять
      </Button>
    </header>
  );
}

export default Header;
