"use client";

import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

import Header from "@components/Header";
import Footer from "./components/Footer";
import Providers from "./utils/providers";
import Projects from "./components/Projects";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Providers>
      <Header />
      <main
        className="w-full flex flex-col items-center justify-center 
  bg-light-primary 
  text-light-text-primary 
  dark:bg-dark-primary 
  dark:text-dark-text-primary"
      >
        <Intro />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </Providers>
  );
}
