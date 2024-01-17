"use client";

import Card from "@baseComponents/Card";
import Title from "@baseComponents/Title";
import Subtitle from "@baseComponents/Subtitle";
import Paragraph from "@baseComponents/Paragraph";
import Button from "@baseComponents/Button";
import Icon from "@baseComponents/Icon";

import skills from "@/app/constants/skills";

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
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
          simplesmente uma simulação de texto.
        </Paragraph>
        <div className="w-full flex items-start mt-3">
          <Button variant="secondary">
            <span>Entre em contato</span>
          </Button>
          <Button variant="primary">
            <a href="/assets/files/BrunoTassinari.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
        <div className="w-full flex items-start mt-1">
          <Icon
            icon="linkedin"
            className="h-7 w-7  text-light-tertiary dark:text-dark-tertiary mr-1"
          />
          <Icon
            icon="github"
            className="h-7 w-7 text-light-tertiary dark:text-dark-tertiary mr-1"
          />
        </div>
      </Card>
      <Card>
        <div className="w-full flex flex-col justify-start">
          <Subtitle>Informações</Subtitle>
          <Title>Sobre Mim</Title>
        </div>
        <Paragraph>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum é
          simplesmente uma simulação de texto. Lorem Ipsum é simplesmente uma
          simulação de texto da indústria tipográfica e de impressos, e vem
          sendo utilizado desde o século XVI, quando um impressor desconhecido
          pegou uma bandeja de tipos e os embaralhou para fazer um livro de
          modelos de tipos. Lorem Ipsum é simplesmente uma simulação de texto.
        </Paragraph>
      </Card>
      <Card>
        <div className="w-full flex flex-col justify-start">
          <Subtitle>Conhecimentos</Subtitle>
          <Title>Tecnologias</Title>
        </div>
        <div className="w-full flex justify-between">
          <ul>
            {skills.frontend.map((skill) => (
              <li key={skill.title}>
                <div className="my-2 flex items-center gap-2">
                  <Icon icon={skill.icon} />
                  <span>{skill.title}</span>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            {skills.backend.map((skill) => (
              <li key={skill.title}>
                <div className="my-2 flex items-center gap-2">
                  <Icon icon={skill.icon} />
                  <span>{skill.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
}
