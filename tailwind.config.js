// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "black",
        buttonBackground: "#FF6276"
      },
      fontSize: {
        textHeading: "1.2rem", 
        textParagraph: "0.9rem", 
      }
    },
  },
  plugins: [],
}
