/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "rgba(0, 0, 0, 0.5)",
        pink: {
          light: "#FF7F9E",
          DEFAULT: "#FF4F81",
          dark: "#D7263D",
        },
        gray: {
          light: "#F7F7F7",
          DEFAULT: "#AFAFAF",
          dark: "#7A7A7A",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      vazir: ["Vazir"],
    },
  },
  plugins: [],
};
