import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#5956E9",
        secondary: "#EBEBF9",
        additional_yellow: "#FFDC60",
        additional_pink: "#FFADAD",
        additional_blue: "#82CEFD",
        additional_dark_blue: "#0A58CA",
        background: "#F7F8FD",
        divider: "#F1F3F6",
        primary_text: "#292930",
        text: "#8A90A2",
      },
      boxShadow: {
        primary: "0px 0px 15px -5px rgba(89, 86, 233, 1)",
        secondary: "0px 0px 15px -5px rgba(235, 235, 249, 1)",
      },
      keyframes: {
        drawer: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        drawer: "drawer 0.3s",
      },
    },
  },
  plugins: [],
} satisfies Config;
