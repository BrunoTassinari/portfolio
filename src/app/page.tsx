"use client";

import Card from "@/app/components/baseComponents/Card";
import Title from "@/app/components/baseComponents/Title";
import Subtitle from "@/app/components/baseComponents/Subtitle";
import Paragraph from "@/app/components/baseComponents/Paragraph";
import Button from "@/app/components/baseComponents/Button";

import skills from "@/app/constants/skills";

import { Github, LinkedinSquare } from "styled-icons/boxicons-logos";

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
          <LinkedinSquare className="h-7 w-7  text-light-tertiary dark:text-dark-tertiary mr-1" />
          <Github className="h-7 w-7 text-light-tertiary dark:text-dark-tertiary mr-1" />
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
        <div>
          <ul>
            {skills.map((skill) => (
              <li key={skill.title}>
                <div className="flex items-center gap-2">
                  <div>{skill.icon}</div>
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
