import ProjectCard from '@baseComponents/ProjectCard';
import projects from '@/app/constants/projects';
import HeaderSection from '../HeaderSection';
import Card from '../_baseComponents/Card';

const Projects = () => (
  <Card>
    <HeaderSection subtitle="Apredizado" title="Meus projetos" />
    <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  </Card>
);

export default Projects;
