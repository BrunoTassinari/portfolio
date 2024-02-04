import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

import SectionContainer from '@/app/components/_baseComponents/SectionContainer';
import Paragraph from '@/app/components/_baseComponents/Paragraph';
import Icon from '@/app/components/_baseComponents/Icon';

const Home = () => (
  <>
    <SectionContainer subtitle="Meu nome é" title="Bruno Tassinari">
      <Paragraph>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
        simplesmente uma simulação de texto.
      </Paragraph>

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
    <SectionContainer id="about" subtitle="Informações" title="Sobre Mim">
      <Paragraph>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
        simplesmente uma simulação de texto. Lorem Ipsum é simplesmente uma
        simulação de texto da indústria tipográfica e de impressos, e vem sendo
        utilizado desde o século XVI, quando um impressor desconhecido pegou uma
        bandeja de tipos e os embaralhou para fazer um livro de modelos de
        tipos. Lorem Ipsum é simplesmente uma simulação de texto.
      </Paragraph>
    </SectionContainer>

    <Skills />
    <Projects />
    <Experience />
  </>
);

export default Home;
