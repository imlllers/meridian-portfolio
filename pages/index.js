import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from '../styles/Home.module.css';

const projects = [
  {
    id: 1,
    title: 'Финансовый дашборд',
    description:
      'Адаптивный интерфейс аналитики: графики, фильтры и ролевой доступ для fintech-клиента.',
    image: '/project-cover.webp',
    tags: ['React', 'Дизайн-система'],
  },
  {
    id: 2,
    title: 'Кабинет клиента',
    description:
      'Личный кабинет с заявками, статусами и уведомлениями для сервисной платформы.',
    image: '/project-cover.webp',
    tags: ['React', 'API'],
  },
  {
    id: 3,
    title: 'Лендинг продукта',
    description:
      'Маркетинговая страница с анимациями, формой заявки и блоком тарифов.',
    image: '/project-cover.webp',
    tags: ['Vite', 'UI'],
  },
];

export default function HomePage() {
  return (
    <div className={styles.page} id="home">
      <Head>
        <title>MERIDIAN — Портфолио фриланс-разработчика</title>
        <meta
          name="description"
          content="Портфолио MERIDIAN: проекты, контакты и доступный интерфейс."
        />
      </Head>

      <a className={styles.skipLink} href="#main-content">
        Перейти к основному содержимому
      </a>

      <Header />

      <main className={styles.main} id="main-content">
        <h1 className={styles.pageTitle}>Портфолио MERIDIAN</h1>

        <section
          className={styles.projectsSection}
          id="projects"
          aria-labelledby="projects-heading"
        >
          <h2 id="projects-heading" className={styles.sectionTitle}>
            Проекты
          </h2>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </section>

        <ContactForm />
      </main>
    </div>
  );
}
