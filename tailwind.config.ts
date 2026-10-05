/* eslint-disable @typescript-eslint/no-require-imports */
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
        void: "#030303",
        "surface-base": "#0A0A0A",
        "surface-elevated": "#141414",
        "amber-core": "#FFB000",
        "amber-glow": "#FFA000",
        "text-primary": "#EAEAEA",
        "text-secondary": "#8B8B8B",
        "text-tertiary": "#707070",
        "grid-line": "#1A1A1A",
        "panel-border": "#222222",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
