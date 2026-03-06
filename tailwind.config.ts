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
        ink: "#1f2724",
        sand: "#f4f1ea",
        stone: "#ddd7cc",
        sage: "#365449",
        clay: "#8d5f4a"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"]
      },
      boxShadow: {
        card: "0 6px 24px rgba(24, 31, 28, 0.08)"
      },
      maxWidth: {
        content: "74rem"
      }
    }
  },
  plugins: []
};

export default config;
