/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#369AC1",
        secondary: "#4EC2C2",
        "final-grey": "#858484",
        "light-grey": "#D9D9D9",
        "white-smoke": "#F6F6F6",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["18px", "27px"],
        lg: ["37px", "45px"],
        xl: ["48px", "50px"],
        custom: ["38px"],
        label: ["13px", "30px"],
      },
    },
  },
  plugins: [],
};
