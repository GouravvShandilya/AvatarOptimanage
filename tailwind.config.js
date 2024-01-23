/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEFEFF", // Custom primary color
        secondary: "#ffed4a", // Custom secondary color
        unselectedText: "#6F778D", // for the text that are not selected
        button: "#094CF2", // Custom button color
        icon: "#2763F4", //for the icons
      },
    },
  },
  plugins: [],
};
