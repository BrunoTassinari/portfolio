import Card from "@components/Card";

export default function Home() {
  return (
    <section>
      <Card>
        <div className="w-full flex flex-col justify-start">
          <span className="m-0 text-[12px] text-primary uppercase">
            Meu nome é
          </span>
          <h1 className="m-0 font-bold uppercase text-light-text-primary dark:text-dark-text-primary">
            Bruno Tassinari
          </h1>
        </div>
        <p className="text-[12px] text-light-text-secondary dark:text-dark-text-secondary mt-[8px]">
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos.
        </p>
      </Card>
    </section>
  );
}
