import Card from '@components/Card';
import Paragraph from '@components/Paragraph';
import HeaderSection from '@/app/components/HeaderSection';

const About = () => (
  <Card>
    <HeaderSection subtitle="Informações" title="Sobre Mim" />
    <Paragraph>
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica
      e de impressos, e vem sendo utilizado desde o século XVI, quando um
      impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
      fazer um livro de modelos de tipos. Lorem Ipsum é simplesmente uma
      simulação de texto. Lorem Ipsum é simplesmente uma simulação de texto da
      indústria tipográfica e de impressos, e vem sendo utilizado desde o século
      XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
      embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
      simplesmente uma simulação de texto.
    </Paragraph>
  </Card>
);

export default About;
