module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: "media",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
