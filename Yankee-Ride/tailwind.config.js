/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E9E3A', // Yankee Delivery Green
          light: '#68C96F',
          dark: '#1E7A28',
        },
        accent: {
          DEFAULT: '#F5A623', // Yankee Delivery Gold
          light: '#FFD07A',
        },
        surface: '#ffffff',
        background: '#f7f9fc',
      }
    },
  },
  plugins: [],
}
