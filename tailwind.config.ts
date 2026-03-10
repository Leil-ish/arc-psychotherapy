import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        sand: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        sage: "rgb(var(--color-accent) / <alpha-value>)",
        "sage-dark": "rgb(var(--color-accent-hover) / <alpha-value>)",
        stone: "rgb(var(--color-border) / <alpha-value>)",
        olive: "rgb(var(--color-olive-secondary) / <alpha-value>)",
        clay: "rgb(var(--color-olive-secondary) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      boxShadow: {
        card: "0 8px 24px rgba(31, 37, 35, 0.06)"
      },
      maxWidth: {
        content: "74rem"
      }
    }
  },
  plugins: []
};

export default config;
