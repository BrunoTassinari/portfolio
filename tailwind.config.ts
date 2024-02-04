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
        white: '#FEFDFE',
        whiteIce: '#CDD7E2',
        strokeBlue: '#0015FF',
        darkBlue: '#0A122A',
        smoothGray: '#504F4F',
        gray: '#292A2D',
        lightGray: '#47474E',
        lightBlue: '#16D8FF',
        transparentBlack: 'rgba(41,42,45, 0.7)',
        transparentWhite: 'rgba(254,253,254, 0.7)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
