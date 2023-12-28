/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      monitor_xsm: "1024px",
      monitor_sm: "1280px",
      monitor_md: "1366px",
      monitor_xl: "1440px",
      monitor_xxl: "1680px",
    },
  },
  plugins: [],
};
