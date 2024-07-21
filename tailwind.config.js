/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tail-blue": "#38bdf8",
        facebook: "#0866ff",
        instagram: "#f90dc1",
        questions: "#7218ff",
      },
    },
  },
  plugins: [],
};
