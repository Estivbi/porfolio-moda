/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moda-rose': '#F8E8E8',
        'moda-lilac': '#F0E6E6',
        'moda-mint': '#F5EBEB',
        'moda-peach': '#F2E2E2',
        'moda-sky': '#F7E8E8',
        'moda-gray': '#FAF7F7',
        'moda-dark': '#4A3A3A',
        'moda-pink': '#F4E4E4',
        'moda-pink-dark': '#8B6B6B',
      },
      fontFamily: {
        'moda': ['"Montserrat"', '"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

