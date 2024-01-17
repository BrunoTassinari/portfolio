"use client";

import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

import Header from "@components/Header";
import Footer from "./components/Footer";
import Providers from "./utils/providers";

export default function Home() {
  return (
    <Providers>
      <div
        className="h-screen 
    bg-light-primary 
    text-light-text-primary 
    dark:bg-dark-primary 
    dark:text-dark-text-primary"
      >
        <Header />
        <main className="w-full flex flex-col items-center justify-center">
          <Intro />
          <About />
          <Skills />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
