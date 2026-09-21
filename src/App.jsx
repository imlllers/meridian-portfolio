import Button from './components/Button/Button';
import ContactForm from './components/ContactForm/ContactForm';
import ProjectCard from './components/ProjectCard/ProjectCard';
import logo from './assets/logo.svg';
import projectCover from './assets/project-cover.webp';
import styles from './App.module.css';

const projectData = {
  title: 'Финансовый дашборд',
  description:
    'Адаптивный интерфейс аналитики: графики, фильтры и ролевой доступ для fintech-клиента.',
  image: projectCover,
  tags: ['React', 'Дизайн-система'],
};

function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img src={logo} alt="MERIDIAN" className={styles.logo} />
        <nav className={styles.nav} aria-label="Основная навигация">
          <a className={`${styles.navLink} ${styles.active}`} href="#home">
            Главная
          </a>
          <a className={styles.navLink} href="#projects">
            Проекты
          </a>
          <a className={styles.navLink} href="#about">
            Обо мне
          </a>
          <a className={styles.navLink} href="#contact">
            Контакты
          </a>
        </nav>
        <Button variant="primary" size="sm">Нанять</Button>
      </header>

      <main className={styles.main}>
        <section className={styles.grid} id="projects">
          <ProjectCard
            title={projectData.title}
            description={projectData.description}
            image={projectData.image}
            tags={projectData.tags}
          />
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
