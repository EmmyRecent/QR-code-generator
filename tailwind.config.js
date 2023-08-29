/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#262a2f",
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      }
    }
  },
  plugins: [],
}

