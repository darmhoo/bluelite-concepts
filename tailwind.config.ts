import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14213D",
        press: "#0F1A30",
        blue: {
          DEFAULT: "#2D6CDF",
          dark: "#1E4FAE",
          light: "#5C8FF0",
        },
        lite: {
          DEFAULT: "#7FD1E0",
          dim: "#B7E6ED",
        },
        paper: "#F7F4EE",
        chalk: "#FFFDF9",
        steam: {
          DEFAULT: "#C7D0D9",
          dark: "#8D99A8",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "press-lines":
          "repeating-linear-gradient(115deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 14px)",
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.55" },
          "50%": { transform: "translateY(-26px) scaleX(1.3)", opacity: "0.3" },
          "100%": { transform: "translateY(-58px) scaleX(1.6)", opacity: "0" },
        },
        press: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.97)" },
        },
        drift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200px 0" },
        },
      },
      animation: {
        steam1: "steam 3.2s ease-in infinite",
        steam2: "steam 3.6s ease-in 0.9s infinite",
        steam3: "steam 2.8s ease-in 1.7s infinite",
        press: "press 2.4s ease-in-out infinite",
        drift: "drift 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
