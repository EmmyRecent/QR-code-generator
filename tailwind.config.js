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
        "color-secondary": "#494eea",
      },

      boxShadow: {
        'shadow': "0 10px 10px rgba(0, 0, 0, 0.1)",
      },
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
