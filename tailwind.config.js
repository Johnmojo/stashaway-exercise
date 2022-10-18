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
      "stashaway-cyan": "#57c5c2",
      "stashaway-lightBlue": "#3884d8",
      "stashaway-cyan": "#62b4b1",
      "stashaway-yellow": "#efbe55",
      "stashaway-lightGrey": "#f8f8f8",
      "stashaway-mediumGrey": "#edeff1",
      "stashaway-darkGrey": "#828282",
      "stashaway-blackGrey": "#e2e3e5"
    }
  },
  plugins: []
};
