import Card from "@/app/components/_baseComponents/Card";
import Paragraph from "@/app/components/_baseComponents/Paragraph";
import HeaderSection from "@components/HeaderSection/HeaderSection";

const About = () => {
  return (
    <Card>
      <HeaderSection subtitle="Informações" title="Sobre Mim" />
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
    </Card>
  );
};

export default About;
