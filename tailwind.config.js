/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clockpax-dark': '#0000F7',
          primary: '#1f2937',

      },
      theme: {
        extend: {
          fontFamily: {
            sans: ['facade-quest', 'sans-serif'],
          },
        }
      }
    },
  },
  plugins: [],
}

