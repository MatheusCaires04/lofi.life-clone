/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueIcon: "#1d96e8",
        whiteText: "#f2f2f2",
      },
      fontFamily: {
        fontInter: "Inter",
      },
    },
  },
  plugins: [],
};
