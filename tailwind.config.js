/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
   
//     extend: {},
//   },
//   plugins: [],
// }
// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xsm': '432px', // Define your custom breakpoint here
      }
    }
  },
  variants: {},
  plugins: [],
}
