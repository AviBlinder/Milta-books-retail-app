/** @type {import('tailwindcss').Config} */
const { color } = require('framer-motion');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInwardsLeft: {
          '0%': { transform: 'translateX(-60px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInwardsRight: {
          '0%': { transform: 'translateX(60px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-inwards-left': 'slideInwardsLeft 0.8s ease-out',
        'slide-inwards-right': 'slideInwardsRight 0.8s ease-out',
      },
      colors: {
        // Brown Palette
        primary: {
          900: '#572508',
          800: '#77340D',
          700: '#8C3D10',
          600: '#AB4E19',
          500: '#C65D21',
          400: '#E67635',
          300: '#EF8E58',
          200: '#FAB38B',
          100: '#FFD3BA',
          50: '#FFEFE6',
        },
        bridal: {
          900: '#F5E9DB',
          800: '#f6ebde',
          700: '#f7ede2',
        },
      },
      brightness: {
        113: '1.13',
      },
      contrast: {
        113: '1.13',
      },
      saturate: {
        120: '1.2',
      },
      sepia: {
        8: '.08',
      },
    },
  },
  plugins: [],
};
