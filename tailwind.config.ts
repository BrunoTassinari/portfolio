import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": "#FEFDFE",
        "light-secondary": "#CDD7E2",
        "light-tertiary": "#0015FF",
        "light-text-primary": "#0A122A",
        "light-text-secondary": "#504F4F",
        "ligth-text-contrast": "#FEFDFE",
        "dark-primary": "#292A2D",
        "dark-secondary": "#47474E",
        "dark-tertiary": "#16D8FF",
        "dark-text-primary": "#FEFDFE",
        "dark-text-secondary": "#F3F8FE",
        "dark-text-contrast": "#47474E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, 
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
