/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#A9F5A1",
        gray: "#2C2C2C",
        lightGray: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
