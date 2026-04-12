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
        arx: {
          bg: "#0a0e1a",
          "bg-surface": "#12182a",
          "bg-nav": "#070b16",
          "bg-code": "#0d1322",
          heading: "#e8ecff",
          body: "#a5b2d3",
          muted: "#6a79a6",
          accent: "#5f7dff",
          "accent-soft": "#7f96ff",
          emerald: "#66e28f",
          border: "rgba(95,125,255,0.16)",
          "border-bright": "rgba(111,139,255,0.36)",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      letterSpacing: {
        label: "0.12em",
        wide: "0.06em",
      },
      animation: {
        "line-expand": "line-expand 0.8s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "scroll-progress": "scroll-progress linear",
        blink: "blink 1.2s step-end infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        "line-expand": {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(2%, -2%)" },
          "50%": { transform: "translate(-3%, 1%)" },
          "60%": { transform: "translate(1%, -4%)" },
          "70%": { transform: "translate(4%, 3%)" },
          "80%": { transform: "translate(-2%, 2%)" },
          "90%": { transform: "translate(3%, -1%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
