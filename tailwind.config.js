/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["metropolis", "sans-serif"],
        akkurat: ["akkurat", "sans-serif"]
      }
    },
    colors: {
      "stashaway-white": "#ffffff",
      "stashaway-blue": "#0e233e",
      "stashaway-cyan": "#62B4B1",
      "stashaway-lightBlue": "#4b84d2",
      "stashaway-cyan": "#62b4b1",
      "stashaway-yellow": "#928154",
      "stashaway-lightGrey": "#f8f8f8",
      "stashaway-mediumGrey": "#edeff1",
      "stashaway-darkGrey": "#828282"
    }
  },
  plugins: []
};
