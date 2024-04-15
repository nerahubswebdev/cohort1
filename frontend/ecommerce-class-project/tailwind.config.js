/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        xss: "250px",
      },
      colors: {
        milescolor: "#6a3085",
      },
    },
  },
  plugins: [],
};
