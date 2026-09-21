import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Button from '../components/Button/Button';
import InputField from '../components/InputField/InputField';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from '../styles/Home.module.css';

const projectData = {
  title: 'Финансовый дашборд',
  description:
    'Адаптивный интерфейс аналитики: графики, фильтры и ролевой доступ для fintech-клиента.',
  image: '/project-cover.webp',
  tags: ['React', 'Дизайн-система'],
};

export default function HomePage({ availability, serverTime }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitClick = () => {
    console.log(inputValue);
  };

  return (
    <div className={styles.page}>
      <Header active="home" />

      <main className={styles.main}>
        <section className={styles.panel} style={{ marginBottom: 24 }}>
          <h1 className={styles.panelTitle}>MERIDIAN</h1>
          <p className={styles.panelText}>Статус доступности: {availability}</p>
          <p className={styles.panelText}>
            Время генерации на сервере (SSR): {serverTime}
          </p>
        </section>

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

HomePage.propTypes = {
  availability: PropTypes.string.isRequired,
  serverTime: PropTypes.string.isRequired,
};

export async function getServerSideProps() {
  return {
    props: {
      availability: 'Open to work',
      serverTime: new Date().toISOString(),
    },
  };
}
