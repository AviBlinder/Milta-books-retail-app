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
      extend: {
        color: {
          'bridal-900': '#F5E9DB',
          'bridal-800': '#f6ebde',
          'bridal-700': '#f7ede2',
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
  },
  plugins: [],
};
