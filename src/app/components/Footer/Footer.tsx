"use client";

import Icon from "@/app/components/_baseComponents/Icon/Icon";

const Footer = () => {
  return (
    <footer className="bg-light-primary dark:bg-dark-primary border-t-[1px] border-t-light-tertiary dark:border-t-dark-tertiary">
      <nav className="w-[90%] py-3 m-auto container flex flex-col items-center justify-between">
        <section className="flex justify-between items-center w-2/4">
          <section className="flex items-center">
            <Icon icon="github" />
            <a
              className="underline text-xs"
              href="https://github.com/BrunoTassinari"
              target="_blank"
            >
              Github
            </a>
          </section>
          <section className="flex items-center">
            <Icon icon="linkedin" />
            <a
              className="underline text-xs"
              href="https://github.com/BrunoTassinari"
              target="_blank"
            >
              Linkedin
            </a>
          </section>
        </section>
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
  );
};

export default Footer;
