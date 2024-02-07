'use client';

import Link from 'next/link';
import Icon from '@/app/components/baseComponents/Icon';

const Footer = () => (
  <footer className="bg-white dark:bg-gray border-t-[1px] border-t-strokeBlue dark:border-t-lightBlue">
    <nav className="w-[90%] py-3 m-auto container flex flex-col items-center justify-between">
      <section className="flex justify-between items-center w-2/4">
        <section className="flex items-center">
          <Icon icon="github" />
          <Link
            className="underline text-xs"
            href="https://github.com/BrunoTassinari"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </section>
        <section className="flex items-center">
          <Icon icon="linkedin" />
          <Link
            className="underline text-xs"
            href="https://github.com/BrunoTassinari"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </Link>
        </section>
      </section>
      <span className="text-xs mt-2">
        &copy; 2024 - Desenvolvido por{' '}
        <Link
          className="underline text-strokeBlue dark:text-lightBlue"
          target="_blank"
          href="https://github.com/BrunoTassinari"
          rel="noreferrer"
        >
          Bruno Tassinari
        </Link>
      </span>
    </nav>
  </footer>
);

export default Footer;
