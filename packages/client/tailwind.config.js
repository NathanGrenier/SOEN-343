/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          mainGreen: "#A9F5A1",
          gray: "#2C2C2C",
          lightGray: "#F5F5F5",
          blueishGray: "#8DA4A8",
        },
      },
      borderImage: {
        'gradient-border': 'linear-gradient(to right, #FF7E5F, #8DA4A8)',  // Customize the gradient here
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
};
