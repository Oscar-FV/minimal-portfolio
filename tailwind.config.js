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
      },
      backgroundImage: {
        'bento1': "url('/src/assets/imgs/bento1.webp')",
        'bento2': "url('/src/assets/imgs/bento2.webp')",
        'bento3': "url('/src/assets/imgs/bento3.webp')",
        'bento4': "url('/src/assets/imgs/bento4.webp')",
      }
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
}