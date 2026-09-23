import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard/ProjectCard';

describe('ProjectCard', () => {
  it('отображает title и description из props', () => {
    render(
      <ProjectCard
        title="Финансовый дашборд"
        description="Адаптивный интерфейс аналитики"
        image="/project-cover.webp"
      />,
    );

    expect(screen.getByRole('heading', { name: 'Финансовый дашборд' })).toBeInTheDocument();
    expect(screen.getByText('Адаптивный интерфейс аналитики')).toBeInTheDocument();
  });
});
