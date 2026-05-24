import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,255,255,.08)"
      }
    },
  },
  plugins: [],
};
export default config;
