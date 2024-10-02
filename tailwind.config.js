/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      'max-xs': { max: '375px' },
      'max-sm': { max: '640px' },
      'max-md': { max: '768px' },
      'max-lg': { max: '1024px' },
    },
    extend: {
      colors: {
        card: '#e8e8e8',
      },
    },
  },
}
