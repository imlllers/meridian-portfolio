import { useState } from 'react';
import Button from './components/Button/Button';
import InputField from './components/InputField/InputField';
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
  const [inputValue, setInputValue] = useState('');

  const handleSubmitClick = () => {
    console.log(inputValue);
  };

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

          <div className={styles.panel} id="contact">
            <h2 className={styles.panelTitle}>Связаться</h2>
            <InputField
              label="Email"
              placeholder="you@studio.com"
              onValueChange={setInputValue}
            />
            <div className={styles.actions}>
              <Button variant="primary" onClick={handleSubmitClick}>
                Смотреть проекты
              </Button>
              <Button variant="secondary" onClick={handleSubmitClick}>
                Написать мне
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
