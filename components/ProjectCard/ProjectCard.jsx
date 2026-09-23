import { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, image, tags = [] }) {
  const headingId = useId();

  return (
    <article className={styles.card} aria-labelledby={headingId}>
      <img
        className={styles.cover}
        src={image}
        alt={`Превью проекта «${title}»: ${description}`}
      />
      <div className={styles.body}>
        {tags.length > 0 ? (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        <h3 id={headingId} className={styles.title}>
          {title}
        </h3>
        <p className={styles.description}>{description}</p>
        <a className={styles.cta} href="#case">
          Смотреть кейс
          <img src="/arrow.svg" alt="" className={styles.icon} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
