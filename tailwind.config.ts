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
          bg: "#0a0a0f",
          "bg-elevated": "#12121a",
          "bg-card": "#16161f",
          "bg-hover": "#1a1a25",
          cyan: "#00e5ff",
          "cyan-dim": "#00b8cc",
          violet: "#7c3aed",
          "violet-dim": "#6d28d9",
          "text-primary": "#f0f0f5",
          "text-secondary": "#8a8a9a",
          "text-muted": "#5a5a6a",
          border: "rgba(255,255,255,0.08)",
          "border-bright": "rgba(255,255,255,0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "terminal-blink": "terminal-blink 1.2s step-end infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "terminal-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "arx-gradient": "linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
