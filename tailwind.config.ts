import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          50: "#FCFAFF",
          100: "#FBF9FF",
          200: "#F4EFFF",
          300: "#EFE7FC",
          400: "#E6DCFA",
          500: "#D8C8F7",
        },
        lavender: {
          light: "#F4EFFF",
          DEFAULT: "#E6DCFA",
          medium: "#C8B4F4",
          border: "rgba(155, 107, 232, 0.2)",
        },
        amethyst: {
          50: "#FAF7FD",
          100: "#F0E8FC",
          200: "#E0CEF8",
          300: "#C6A6F3",
          400: "#B28DF2",
          500: "#9B6BE8",
          600: "#8247E5",
          700: "#6B2FD4",
          800: "#5521B0",
          900: "#441990",
        },
        violet: {
          royal: "#2A1B4D",
          deep: "#1C1236",
          cosmic: "#120B24",
          abyss: "#0A0517",
        },
        silver: {
          shimmer: "#F8FAFC",
          filigree: "#E2E8F0",
          border: "#D8DEE9",
          muted: "#94A3B8",
        },
        holographic: {
          pink: "#F472B6",
          aqua: "#38BDF8",
          gold: "#FDE047",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "amethyst-gradient": "linear-gradient(135deg, #9B6BE8 0%, #6839C2 100%)",
        "ethereal-radial": "radial-gradient(circle at 50% 0%, rgba(155, 107, 232, 0.15) 0%, transparent 70%)",
        "silver-border": "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(216,222,233,0.4), rgba(155,107,232,0.3))",
        "silver-border-dark": "linear-gradient(135deg, rgba(155,107,232,0.4), rgba(216,222,233,0.2), rgba(130,71,229,0.3))",
      },
      boxShadow: {
        "amethyst-glow": "0 0 25px -5px rgba(155, 107, 232, 0.35)",
        "amethyst-glow-lg": "0 0 50px -10px rgba(155, 107, 232, 0.45)",
        "pearl-card": "0 10px 30px -10px rgba(42, 27, 77, 0.06), 0 0 0 1px rgba(155, 107, 232, 0.12)",
        "pearl-card-hover": "0 20px 40px -12px rgba(155, 107, 232, 0.22), 0 0 0 1px rgba(155, 107, 232, 0.35)",
        "dark-card": "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(230, 220, 250, 0.12)",
        "dark-card-hover": "0 20px 40px -12px rgba(155, 107, 232, 0.3), 0 0 0 1px rgba(155, 107, 232, 0.4)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
