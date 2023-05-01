/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      cyan: { 500: '#61DCFB' },
      green: { 500: '#04D361' },
      yellow: { 500: '#EBA417' },

      shape: { 500: '#1F2729' },

      gray: {
        100: '#E1E1E6', // headline
        300: '#A8A8B3', // body
        500: '#323238',
        700: '#29292e', // border
        900: '#121214', // background
      },

      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
