/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'navbar': ['Arimo'],
        'body': ['Rubik'],
        'blogCard': ['Archivo']
      }
    },
  },
  plugins: [],
}

