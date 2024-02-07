/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx,jsx}",
    "./common/**/*.{js,ts,tsx,jsx}",
    "./features/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "768px",
          lg: "992px",
          xl: "1148px",
        },
      },
    },
  },
  plugins: [],
};
