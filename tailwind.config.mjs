// tailwind.config.mjs
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.5xl"),
              fontWeight: theme("fontWeight.bold"),
              color: theme("colors.zinc.900"),
            },
            h2: {
              fontSize: theme("fontSize.4xl"),
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.zinc.800"),
            },
            h3: {
              fontSize: theme("fontSize.3xl"),
              fontWeight: theme("fontWeight.medium"),
              color: theme("colors.zinc.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
