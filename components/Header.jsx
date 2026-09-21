import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import styles from '../styles/Home.module.css';

function Header({ active = 'home' }) {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="MERIDIAN" className={styles.logo} />
      <nav className={styles.nav} aria-label="Основная навигация">
        <Link
          className={`${styles.navLink} ${active === 'home' ? styles.active : ''}`}
          href="/"
        >
          Главная
        </Link>
        <Link
          className={`${styles.navLink} ${active === 'about' ? styles.active : ''}`}
          href="/about"
        >
          Обо мне
        </Link>
      </nav>
      <Button variant="primary" size="sm">
        Нанять
      </Button>
    </header>
  );
}

Header.propTypes = {
  active: PropTypes.oneOf(['home', 'about']),
};

export default Header;
