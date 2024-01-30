import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        'light-primary': '#FEFDFE',
        'light-secondary': '#CDD7E2',
        'light-tertiary': '#0015FF',
        'light-text-primary': '#0A122A',
        'light-text-secondary': '#504F4F',
        'ligth-text-contrast': '#FEFDFE',
        'dark-primary': '#292A2D',
        'dark-secondary': '#47474E',
        'dark-tertiary': '#16D8FF',
        'dark-text-primary': '#FEFDFE',
        'dark-text-secondary': '#F3F8FE',
        'dark-text-contrast': '#47474E',
        'black-rgba': 'rgba(41,42,45, 0.7)',
        'white-rgba': 'rgba(254,253,254, 0.7)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
