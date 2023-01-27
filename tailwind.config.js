/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "marck-script": ["Marck Script", "cursive"],
      hind: ["Hind", "sans-serif"],
      "poiret-one": ["Poiret One", "cursive"],
    },
    maxWidth: {
      standard: "1300px",
    },
    scale: {
      175: "1.75",
      155: "1.55",
      45: ".45",
      75: ".75",
    },
  },
  plugins: [],
};
