/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'worksans': ['WorkSans', 'sans-serif'],
        'newake': ['Newake', 'sans-serif'], 
      },
      colors: {
        primary: '#ADA9D0',
        secondary: '#362F76',
        accent: '#6559D0'
      }
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
}