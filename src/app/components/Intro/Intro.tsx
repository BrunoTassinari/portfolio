import Card from "@baseComponents/Card";
import Paragraph from "@baseComponents/Paragraph";
import Button from "@baseComponents/Button";
import Icon from "@baseComponents/Icon";
import HeaderSection from "@components/HeaderSection/HeaderSection";
import Mounted from "../baseComponents/Mounted";

const Intro = () => {
  return (
    <Mounted>
      <Card>
        <HeaderSection subtitle="Meu nome é" title="Bruno Tassinari" />
        <Paragraph>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
          simplesmente uma simulação de texto.
        </Paragraph>
        <section className="w-full flex items-start mt-3">
          <Button variant="secondary">
            <span>Entre em contato</span>
          </Button>
          <Button variant="primary">
            <a href="/assets/files/BrunoTassinari.pdf" download>
              Download CV
            </a>
          </Button>
        </section>
        <section className="w-full flex items-start mt-1">
          <Icon
            icon="linkedin"
            className="h-7 w-7  text-light-tertiary dark:text-dark-tertiary mr-1"
          />
          <Icon
            icon="github"
            className="h-7 w-7 text-light-tertiary dark:text-dark-tertiary mr-1"
          />
        </section>
      </Card>
    </Mounted>
  );
};

export default Intro;