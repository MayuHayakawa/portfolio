/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#A1C1E5",
        "primary-600": "#5C8DC4",
        "secondary-500": "#E78093",
        "secondary-600": "#B40C40",
        "third-500": "#D1C6CB",
      },
    },
  },
  plugins: [],
}

