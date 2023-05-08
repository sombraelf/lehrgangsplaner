/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-green": {
          100: "#C4DFC4",
          200: "#A2C9A2",
          300: "#5A8A5A",
        },
      },
    },
  },
  plugins: [],
};