'use client';

import Icon from '@/app/components/_baseComponents/Icon';

const Footer = () => (
  <footer className="bg-white dark:bg-gray border-t-[1px] border-t-strokeBlue dark:border-t-lightBlue">
    <nav className="w-[90%] py-3 m-auto container flex flex-col items-center justify-between">
      <section className="flex justify-between items-center w-2/4">
        <section className="flex items-center">
          <Icon icon="github" />
          <a
            className="underline text-xs"
            href="https://github.com/BrunoTassinari"
            target="_blank"
            rel="noreferrer"
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
            rel="noreferrer"
          >
            Linkedin
          </a>
        </section>
      </section>
      <span className="text-xs mt-2">
        &copy; 2024 - Desenvolvido por{' '}
        <a
          className="underline text-strokeBlue dark:text-lightBlue"
          target="_blank"
          href="https://github.com/BrunoTassinari"
          rel="noreferrer"
        >
          Bruno Tassinari
        </a>
      </span>
    </nav>
  </footer>
);

export default Footer;
