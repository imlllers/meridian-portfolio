import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function ProjectCard({ title, description, image, tags = [] }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="d-flex flex-column">
        {tags.length > 0 ? (
          <div className="mb-2 d-flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} bg="primary" pill>
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <Card.Link href="#case">Смотреть кейс</Card.Link>
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
