/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0F1624",
        gray: {
          750: "#2C3441",
        },
      },
      fontFamily: {
        "gt-walsheim": ["GT Walsheim", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
