/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#fdf8f5",
        "medium-pink": "#f3d4c2",
        "light-blue": "#bde0fe",
        "medium-blue": "#a2d2ff",
      },
      spacing: {
        500: "32rem",
      },
    },
  },
  plugins: [],
};
