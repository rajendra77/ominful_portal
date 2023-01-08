module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "280px", max: "768px" },
      },
      colors: {
        lightGreen: "#03C6A1",
        ligthGreen2: "#AFF9EC",
        lightGreen3: "#73F1D9",
        lightYellow: "#FFC727",
        lightYellow2: "#F4F8C8",
        lightRed: "#FF5776",
        lightRed2: "#F9DBE4",
        lightBlue: "#51B9F6",
        lightBlue2: "#DBF2F9",
        buttonColor1: "#01D9B0",
        buttonColor2: "#02C6A1",
        lightGreen4: "#C5FFF4",
        pink: "#FFEDF0",
        red1: "#FF5776",
        red2: "#EA5764",
        titleBlack: "#222222",
        borderLight: "text-gray-100",
        uploadCV: "#00CCBE",
        borderColor: "#EEF0FF",
        green1: "#28C76F",
      },
    },
  },

  plugins: [],
};
