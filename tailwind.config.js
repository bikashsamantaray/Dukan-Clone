/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':"#146EB4",
        'hover': "#0E4F82"
      }
    },
  },
  plugins: [],
}

