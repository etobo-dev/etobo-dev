import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F7F2",
        terracotta: {
          DEFAULT: "#B14B1E",
          dark: "#A6522E",
        },
        charcoal: {
          DEFAULT: "#2D1B14",
          soft: "#2D2926",
        },
        body: {
          DEFAULT: "#6B5D54",
          muted: "#8A7B72",
        },
        beige: "#E8DFD4",
        tan: "#D4C4B0",
        "dusty-rose": "#EDD9D0",
        pill: "#F0EBE3",
        border: "#E5DDD3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(45, 27, 20, 0.06)",
        soft: "0 2px 12px rgba(45, 27, 20, 0.04)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
