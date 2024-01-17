"use client";

import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <section>
      <Intro />
      <About />
      <Skills />
    </section>
  );
}
