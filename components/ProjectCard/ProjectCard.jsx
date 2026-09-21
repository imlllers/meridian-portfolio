import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, image, tags = [] }) {
  return (
    <article className={styles.card}>
      <img className={styles.cover} src={image} alt={title} />
      <div className={styles.body}>
        {tags.length > 0 ? (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <h3 className={styles.title}>{title}</h3>
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
