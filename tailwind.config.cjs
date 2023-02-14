/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      primary: {
        "red-400": "hsl(0, 100%, 74%)",
        "green-400": "hsl(154, 59%, 51%)",
      },
      accent: {
        "blue-400": "hsl(248, 32%, 49%)",
      },
      neutral: {
        "blue-800": "hsl(249, 10%, 26%)",
        "blue-200": "hsl(246, 25%, 77%)",
      },
    },
    screens: {
      sm: { max: "480px" },
      md: { max: "864px" },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
],

// content: [
//   "./node_modules/flowbite/**/*.js"
// ]
};
