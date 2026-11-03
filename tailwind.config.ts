import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          950: "#040711",
          900: "#080e1e",
          850: "#0c142b",
          800: "#101b38",
          700: "#182852",
        },
        electric: {
          cyan: "#00f2fe",
          blue: "#4facfe",
          purple: "#7f5af0",
          indigo: "#6366f1",
          emerald: "#10b981",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 0% 0%, rgba(0, 242, 254, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(127, 90, 240, 0.15) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(79, 172, 254, 0.1) 0px, transparent 50%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "gradient-x": "gradientX 12s ease infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 242, 254, 0.4)",
        "glow-blue": "0 0 25px -5px rgba(79, 172, 254, 0.4)",
        "glow-purple": "0 0 25px -5px rgba(127, 90, 240, 0.4)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

