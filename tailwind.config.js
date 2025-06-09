/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: {
          50: "rgb(250 245 255)",
          100: "rgb(243 232 255)",
          200: "rgb(233 213 255)",
          300: "rgb(196 181 253)",
          400: "rgb(168 85 247)",
          500: "rgb(147 51 234)",
          600: "rgb(126 34 206)",
          700: "rgb(107 33 168)",
          800: "rgb(88 28 135)",
          900: "rgb(74 29 111)",
          950: "rgb(59 7 100)",
        },
        accent: "rgb(var(--accent))",
        foreground: "rgb(var(--foreground-rgb))",
        "foreground-secondary": "rgb(var(--foreground-secondary))",
        background: "rgb(var(--background))",
        "background-secondary": "rgb(var(--background-secondary))",
        border: "rgb(var(--border))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
