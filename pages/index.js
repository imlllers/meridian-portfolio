import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from '../styles/Home.module.css';

const projectData = {
  title: 'Финансовый дашборд',
  description:
    'Адаптивный интерфейс аналитики: графики, фильтры и ролевой доступ для fintech-клиента.',
  image: '/project-cover.webp',
  tags: ['React', 'Дизайн-система'],
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />

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
