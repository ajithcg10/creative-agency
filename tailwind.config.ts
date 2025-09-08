import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Existing up-down animation
        updown: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        // New left-right floating animation
        leftright: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" }, // adjust distance
        },
        // Optional: diagonal float (combine both)
        float: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(20px, 0)" },
          "75%": { transform: "translate(10px, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        updown: "updown 3s ease-in-out infinite",
        leftright: "leftright 4s ease-in-out infinite", // smooth left-right
        float: "float 6s ease-in-out infinite", // diagonal floating
        "spin-slow": "spin 9s linear infinite",
      },
      backgroundImage: {
        "home-bg": "url('/assets/images/hero.webp')",
      },
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#F59E0B",
        dark: "#111827",
        light: "#F3F4F6",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        sans: ["ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
