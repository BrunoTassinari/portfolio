"use client";

import { Github, LinkedinSquare } from "styled-icons/boxicons-logos";
import Mounted from "../Mounted";

const Footer = () => {
  return (
    <Mounted>
      <footer className="bg-light-primary dark:bg-dark-primary border-t-2 border-t-light-tertiary dark:border-t-dark-tertiary ">
        <nav className="w-[90%] py-3 m-auto container flex flex-col items-center justify-between">
          <div className="flex justify-between items-center w-2/4">
            <div className="flex items-center">
              <Github className="h-6 w-6 text-light-tertiary dark:text-dark-tertiary mr-1" />
              <a
                className="underline text-xs"
                href="https://github.com/BrunoTassinari"
                target="_blank"
              >
                Github
              </a>
            </div>
            <div className="flex items-center">
              <LinkedinSquare className="h-6 w-6  text-light-tertiary dark:text-dark-tertiary mr-1" />
              <a
                className="underline text-xs"
                href="https://github.com/BrunoTassinari"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
          <span className="text-xs mt-2">
            &copy; 2024 - Desenvolvido por{" "}
            <a
              className="underline text-light-tertiary dark:text-dark-tertiary"
              target="_blank"
              href="https://github.com/BrunoTassinari"
            >
              Bruno Tassinari
            </a>
          </span>
        </nav>
      </footer>
    </Mounted>
  );
};

export default Footer;
