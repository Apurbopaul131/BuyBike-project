/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Components/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
