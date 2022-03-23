module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#e0e0e0",
        secondary: "#d1d1d1",
        dark: "#333",
      },
      fontFamily: {
        YanoneKaffeesatz: ["YanoneKaffeesatz", "sans"],
      },
    },
  },
  plugins: [],
};
