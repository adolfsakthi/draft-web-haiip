/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b455f2', // Extracted from Visitor Management
        secondary: '#1ecaa8', // Extracted from Leave Management
        dark: '#0f172a',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        zen: ['"Zen Dots"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
