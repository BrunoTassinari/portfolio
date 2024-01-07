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
        primary: "#3B49E6",
        "light-primary": "#FEFDFE",
        "light-secondary": "#DCE1E8",
        "light-text-primary": "#0A122A",
        "light-text-secondary": "#504F4F",
        "dark-primary": "#333333",
        "dark-secondary": "#444445",
        "dark-text-primary": "#FEFDFE",
        "dark-text-secondary": "#F3F8FE",
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
