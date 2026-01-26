/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta minimalista y elegante para moda
        'moda': {
          'cream': '#FAF9F6',      // Blanco roto elegante
          'sand': '#E8E4DF',       // Arena suave
          'stone': '#D4CFC9',      // Piedra cálida
          'taupe': '#9B8E82',      // Taupe sofisticado
          'charcoal': '#2D2926',   // Carbón profundo
          'accent': '#C9A690',     // Acento dorado suave
        }
      },
      fontFamily: {
        // Tipografía elegante para moda
        'serif': ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        'sans': ['"Inter"', '"Helvetica Neue"', 'sans-serif'],
        'display': ['"Bodoni Moda"', '"Didot"', 'serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

