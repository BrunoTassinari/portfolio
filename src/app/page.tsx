import Card from "@components/Card";
import Title from "@components/Title";
import Subtitle from "@components/Subtitle";
import Paragraph from "@components/Paragraph";

export default function Home() {
  return (
    <section>
      <Card>
        <div className="w-full flex flex-col justify-start">
          <Subtitle>Meu nome é</Subtitle>
          <Title>Bruno Tassinari</Title>
        </div>
        <Paragraph>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos.
        </Paragraph>
      </Card>
    </section>
  );
}
