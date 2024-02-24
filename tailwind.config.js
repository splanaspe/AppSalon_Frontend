/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        "app": "url('./public/img/1.jpg')"
      }
    },
  },
  plugins: [],
}

