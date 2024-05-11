/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#c4dbf5",
        "custom-secondary": "#1e1f6f",
      },
      
      fontFamily: {
        "google-anta": ["anta", "sans-serif"],
      },
      boxShadow: {
        "y-shadow":
          "0 10px 15px -10px rgba(0, 0, 0, 0.1), 0 -10px 15px -8px rgba(0, 0, 0, 0.1), -10px 0 15px -10px rgba(0, 0, 0, 0.1), 10px 0 15px -10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
