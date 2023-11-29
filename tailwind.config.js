/** @type {import('tailwindcss').Config} */
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
      colors: {
        primary: {
          900: '#19216C',
          800: '#647ACB',
          700: '#2D3A8C',
          600: '#7B93DB',
          500: '#35469C',
          400: '#98AEEB',
          300: '#4055A8',
          200: '#BED0F7',
          100: '#4C63B6',
          50: '#E0E8F9',
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
