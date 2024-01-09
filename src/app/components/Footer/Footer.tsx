"use client";

import { Github, LinkedinSquare } from "styled-icons/boxicons-logos";
import Mounted from "../Mounted";

const Footer = () => {
  return (
    <Mounted>
      <footer className="px-4 py-3 bg-light-primary dark:bg-dark-primary border-t-primary border-t-4">
        <div className="container flex flex-col items-center justify-between">
          <div className="flex justify-between items-center w-2/4">
            <div className="flex items-center">
              <Github className="h-6 w-6 text-primary mr-1" />
              <a
                className="underline text-xs"
                href="https://github.com/BrunoTassinari"
                target="_blank"
              >
                Github
              </a>
            </div>
            <div className="flex items-center">
              <LinkedinSquare className="h-6 w-6 text-primary mr-1" />
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
              className="underline"
              target="_blank"
              href="https://github.com/BrunoTassinari"
            >
              Bruno Tassinari
            </a>
          </span>
        </div>
      </footer>
    </Mounted>
  );
};

export default Footer;
