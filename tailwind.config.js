module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        getSchwifty: ["GetSchwifty"],
        sans: ["Helvetica", "GetSchwifty", "sans-serif"],
      },
      colors: {
        powderblue: "#00b5cc",
        toxicgreen: "#91a126",
        khaki: "#e6e887"
      },
    },
  },
  plugins: [],
};
