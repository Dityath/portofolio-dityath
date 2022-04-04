module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primario: "#5C62EC",
        hover: "#3C40AE",
        acento: "#85BFD1",
        gris: "#A0A0A1",
        blanco: "#FFFFFF",
        rellenos: "#1C1E22",
        bordes: "#26292D",
        fondos: "#171718",
      },
    },
  },
  plugins: [],
};
