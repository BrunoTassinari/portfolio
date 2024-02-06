import SectionContainer from '@/app/components/SectionContainer';
import ProjectCard from '@/app/components/ProjectCard';
import projects from '@/app/constants/projects';
import HeaderSection from '../../../../components/SectionHeader';

const Projects = () => (
  <SectionContainer id="projects">
    <HeaderSection subtitle="Apredizado" title="Meus projetos" />
    <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
      {projects.map((project) => (
        <ProjectCard key={project.keyof} project={project} />
      ))}
    </section>
  </SectionContainer>
);

export default Projects;
