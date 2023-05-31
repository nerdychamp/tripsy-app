/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    // './src/screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#92e3a9',
        brandLight: '#def7e5',
        bgLight: '#F9F4F3',
        text: '#677987',
        grey: '#2F4858',
        orange1: '#F56753',
        orange2: '#FF8083',
      },
    },
  },
  plugins: [],
};
