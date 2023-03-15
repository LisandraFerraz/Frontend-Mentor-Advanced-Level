/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-moon": "url('./src/assets/icons/light-moon-icon.svg')",
        "light-arrow": "url('./src/assets/icons/light-arrow-icon.svg')",
        "light-search": "url('./src/assets/icons/light-search-icon.svg')",

        "dark-moon": "url('./src/assets/icons/dark-moon-icon.svg')",
        "dark-arrow": "url('./src/assets/icons/dark-arrow-icon.svg')",
        "dark-search": "url('./src/assets/icons/dark-search-icon.svg')",
      },
      colors: {
        "dark-blue": "#2b3945",
        "very-dark-blue": "#202c37",
        "light-dark-blue": "#111517",
        "dark-grey": "#858585",
        "very-light-grey": "#fafafa",
        white: "#fff",
      },
      // boxShadow: {
      //   "small-sd": "0 0 10px #00000025",
      // },
    },
  },
  plugins: [],
};
