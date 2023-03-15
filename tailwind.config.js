/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/contexts/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        slideOut: 'slideOut 0.8s forwards',
        slideIn: 'slideIn 0.8s forwards',
      },
      backgroundColor: {
        gray: {
          750: '#2C3441',
        },
        darkBg: '#0F1624',
      },
      fontFamily: {
        'gt-walsheim': ['GT Walsheim', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
