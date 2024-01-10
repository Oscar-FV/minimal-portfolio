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
        primary: '#332F56',
        secondary: '#232367',
        accent: '#684771'
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