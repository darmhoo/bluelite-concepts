import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          light: "#13396B",
          deep: "#071A32",
        },
        emerald: {
          DEFAULT: "#10A05A",
          dark: "#0C7D46",
          light: "#DCF3E6",
        },
        grey: {
          DEFAULT: "#F2F4F6",
          dark: "#C6CDD6",
          ink: "#5B6B7C",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};
export default config;
