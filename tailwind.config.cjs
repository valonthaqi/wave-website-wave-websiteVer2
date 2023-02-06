/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*"],
  theme: {
    extend: {
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
