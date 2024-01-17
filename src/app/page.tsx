"use client";

import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

import Header from "@components/Header";
import Footer from "./components/Footer";
import Providers from "./utils/providers";

import Mounted from "@baseComponents/Mounted";

export default function Home() {
  return (
    <Providers>
      <Mounted>
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
        </main>
        <Footer />
      </Mounted>
    </Providers>
  );
}
