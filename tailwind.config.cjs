/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
}
