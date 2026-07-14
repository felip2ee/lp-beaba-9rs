/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#063A29', // Deep emerald background
        secondary: '#105B41', // Lighter emerald for cards
        accent: '#DCA452', // Gold
        accentHover: '#C48D3F', // Darker gold for hover
        background: '#04281C', // Very dark green background
        dark: '#02150E'
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Fira Code"', 'monospace']
      }
    },
  },
  plugins: [],
}
