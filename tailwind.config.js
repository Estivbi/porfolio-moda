/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta pastel inspirada en moda
        'moda-rose': '#F7D6E0',
        'moda-lilac': '#E3D6F7',
        'moda-mint': '#D6F7EC',
        'moda-peach': '#F7E6D6',
        'moda-sky': '#D6EAF7',
        'moda-gray': '#F5F5F5',
        'moda-dark': '#22223B',
      },
      fontFamily: {
        'moda': ['"Montserrat"', '"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

