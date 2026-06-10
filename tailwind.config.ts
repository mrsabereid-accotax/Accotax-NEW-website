import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d6e0ec",
          200: "#aebfd6",
          300: "#7e98bb",
          400: "#4f6e9b",
          500: "#345182",
          600: "#243d66",
          700: "#1a2e4f",
          800: "#122440",
          900: "#0b1b33",
          950: "#071228",
        },
        gold: {
          50: "#fbf7ec",
          100: "#f4ead0",
          200: "#e8d29c",
          300: "#dcb968",
          400: "#d2a544",
          500: "#c9a227",
          600: "#a9831f",
          700: "#86641d",
          800: "#6f521f",
          900: "#5f461f",
        },
        // IFZA-inspired teal accent
        teal: {
          50: "#edfbf8",
          100: "#cff4ec",
          200: "#a0e9da",
          300: "#67d6c4",
          400: "#33bdab",
          500: "#14a596",
          600: "#0c8479",
          700: "#0e6962",
          800: "#11544f",
          900: "#123f3b",
          950: "#04201d",
        },
        // Near-black, teal-tinted dark for cinematic sections
        ink: {
          700: "#0f2723",
          800: "#0a1c19",
          900: "#071411",
          950: "#040c0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(11,27,51,0.06), 0 12px 32px -12px rgba(11,27,51,0.12)",
        "card-hover":
          "0 4px 12px rgba(11,27,51,0.08), 0 24px 48px -16px rgba(11,27,51,0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.12) translateY(-1.5%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(7px)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        kenburns: "kenburns 18s ease-out forwards",
        marquee: "marquee 32s linear infinite",
        "scroll-cue": "scroll-cue 1.6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
