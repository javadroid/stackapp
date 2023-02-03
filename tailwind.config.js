/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: !0,
  theme: {
    extend: {
      colors: {
        primarybg: "#141414",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
