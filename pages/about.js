import PropTypes from 'prop-types';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function AboutPage({ name, role, bio, builtAt }) {
  return (
    <div className={styles.page}>
      <Header active="about" />

      <main className={styles.main}>
        <section className={styles.panel}>
          <h1 className={styles.panelTitle}>Обо мне</h1>
          <p className={styles.panelText}>
            <strong>{name}</strong> — {role}
          </p>
          <p className={styles.panelText}>{bio}</p>
          <p className={styles.panelText}>
            Страница сгенерирована статически (SSG) при сборке: {builtAt}
          </p>
        </section>
      </main>
    </div>
  );
}

AboutPage.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  builtAt: PropTypes.string.isRequired,
};

export async function getStaticProps() {
  return {
    props: {
      name: 'MERIDIAN Studio',
      role: 'фриланс-разработчик интерфейсов',
      bio: 'Делаю адаптивные интерфейсы, дизайн-системы и продуктовые лендинги для клиентов из fintech и SaaS. Контент этой страницы меняется редко, поэтому она собрана статически.',
      builtAt: new Date().toISOString(),
    },
  };
}
