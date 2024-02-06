import SectionContainer from '@components/SectionContainer';
import Projects from './components/Projects';
import Experience from './components/Experience';

import Icon from '@/app/components/baseComponents/Icon';
import SectionHeader from '@/app/components/SectionHeader';
import SkillsList from './components/SkillsList';

import skills from '@/app/constants/skills';

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

    <Projects />
    <Experience />
  </>
);

export default Home;
