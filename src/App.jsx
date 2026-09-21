import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from './components/Button/Button';
import InputField from './components/InputField/InputField';
import ProjectCard from './components/ProjectCard/ProjectCard';
import logo from './assets/logo.svg';
import projectCover from './assets/project-cover.webp';

const projects = [
  {
    id: 1,
    title: 'Финансовый дашборд',
    description:
      'Адаптивный интерфейс аналитики: графики, фильтры и ролевой доступ для fintech-клиента.',
    image: projectCover,
    tags: ['React', 'Дизайн-система'],
  },
  {
    id: 2,
    title: 'Кабинет клиента',
    description:
      'Личный кабинет с заявками, статусами и уведомлениями для сервисной платформы.',
    image: projectCover,
    tags: ['React', 'API'],
  },
  {
    id: 3,
    title: 'Лендинг продукта',
    description:
      'Маркетинговая страница с анимациями, формой заявки и блоком тарифов.',
    image: projectCover,
    tags: ['Vite', 'UI'],
  },
  {
    id: 4,
    title: 'Админ-панель',
    description:
      'Таблицы, фильтры и CRUD-операции для управления контентом и пользователями.',
    image: projectCover,
    tags: ['React', 'Forms'],
  },
  {
    id: 5,
    title: 'Мобильный веб-апп',
    description:
      'Адаптивный интерфейс под мобильные сценарии с быстрым онбордингом.',
    image: projectCover,
    tags: ['Mobile', 'UX'],
  },
  {
    id: 6,
    title: 'Дизайн-система',
    description:
      'Набор переиспользуемых компонентов, токенов и документации для команды.',
    image: projectCover,
    tags: ['Design System'],
  },
];

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitClick = () => {
    console.log(inputValue);
  };

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-4">
        <Navbar bg="white" expand="md" className="mb-4 px-3 shadow-sm rounded">
          <Navbar.Brand href="#home">
            <img src={logo} alt="MERIDIAN" height={32} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Главная</Nav.Link>
              <Nav.Link href="#projects">Проекты</Nav.Link>
              <Nav.Link href="#about">Обо мне</Nav.Link>
              <Nav.Link href="#contact">Контакты</Nav.Link>
            </Nav>
            <Button variant="primary" size="sm">
              Нанять
            </Button>
          </Navbar.Collapse>
        </Navbar>

        <h1 className="h3 mb-4" id="projects">
          Проекты
        </h1>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6} lg={4}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            </Col>
          ))}
        </Row>

        <Row className="mt-5" id="contact">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h2" className="h4 mb-3">
                  Связаться
                </Card.Title>
                <InputField
                  label="Email"
                  placeholder="you@studio.com"
                  onValueChange={setInputValue}
                />
                <div className="d-flex flex-wrap gap-2">
                  <Button variant="primary" onClick={handleSubmitClick}>
                    Смотреть проекты
                  </Button>
                  <Button variant="secondary" onClick={handleSubmitClick}>
                    Написать мне
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
