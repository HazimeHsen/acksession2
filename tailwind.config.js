/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00aed4",
        secondary: "#000",
        third: "#FFCC00",
        fourth: "ffcfdb",
        black: "#000",
        gray: "#999999",
        white: "#fff",
        bgWhite: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
