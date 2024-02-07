import SectionContainer from '@components/SectionContainer';
import ProjectCard from '@components/ProjectCard';
import Icon from '@components/baseComponents/Icon';

import { Tabs } from '@components/ui/tabs';
import ExperienceTabList from '@components/ExperienceTabList';
import ExperienceTabContent from '@components/ExperienceTabContent';
import Button from '@components/baseComponents/Button';
import SectionHeader from '@/app/components/SectionHeader';
import SkillsList from '../../components/SkillsList';

import skills from '@/app/constants/skills';
import projects from '@/app/constants/projects';
import experiences from '@/app/constants/experiences';

const Home = () => (
  <>
    <SectionContainer className="mt-[80px]">
      <SectionHeader title="Bruno Tassinari" subtitle="Meu nome é" />
      <p className="text-[0.9rem] text-smoothGray dark:text-whiteIce text-justify">
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
        simplesmente uma simulação de texto.
      </p>

      <section className="w-full flex items-start mt-1">
        <Icon
          icon="linkedin"
          className="h-7 w-7  text-strokeBlue dark:text-lightBlue mr-1"
        />
        <Icon
          icon="github"
          className="h-7 w-7 text-strokeBlue dark:text-lightBlue mr-1"
        />
      </section>
    </SectionContainer>
    <SectionContainer id="about">
      <SectionHeader subtitle="Informações" title="Sobre Mim" />
      <p className="text-[0.9rem] text-smoothGray dark:text-whiteIce text-justify">
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
        simplesmente uma simulação de texto. Lorem Ipsum é simplesmente uma
        simulação de texto da indústria tipográfica e de impressos, e vem sendo
        utilizado desde o século XVI, quando um impressor desconhecido pegou uma
        bandeja de tipos e os embaralhou para fazer um livro de modelos de
        tipos. Lorem Ipsum é simplesmente uma simulação de texto.
      </p>
    </SectionContainer>

    <SectionContainer id="skills">
      <SectionHeader subtitle="Conhecimentos" title="Tecnologias" />
      <section className="w-full flex justify-between">
        <SkillsList skills={skills.frontend} />
        <SkillsList skills={skills.backend} />
      </section>
    </SectionContainer>

    <SectionContainer id="projects">
      <SectionHeader subtitle="Apredizado" title="Meus projetos" />
      <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        {projects.map((project) => (
          <ProjectCard key={project.keyof} project={project} />
        ))}
      </section>
    </SectionContainer>

    <SectionContainer id="experience">
      <SectionHeader subtitle="Carreira" title="Experiências" />
      <Tabs defaultValue={experiences.find((e) => e.default === true)?.company}>
        <ExperienceTabList experiences={experiences} />
        <ExperienceTabContent experiences={experiences} />
      </Tabs>
    </SectionContainer>

    <SectionContainer id="contact">
      <SectionHeader subtitle="Vamos conversar" title="Entre em contato" />
      <span className="m-0 text-[1rem] text-gray dark:text-whiteIce">
        Estou disponível para novos projetos e oportunidades. Vamos conversar!
      </span>
      <Button variant="primary">
        <a href="mailto:bruno.fagundes80@gmail.com">Entre em contato</a>
      </Button>
    </SectionContainer>
  </>
);

export default Home;
