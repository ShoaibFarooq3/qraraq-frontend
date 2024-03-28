/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#369AC1",
        secondary: "#4EC2C2",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["18px", "20px"],
        lg: ["48px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  plugins: [],
};
