/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        about: "url('../paramarsh/src/components/2.jpg')",
        contact: "url('../paramarsh/src/components/3.jpg')",
        team: "url('../paramarsh/src/components/4.jpg')",
        event: "url('../paramarsh/src/components/5.jpg')",
      },
    },
    screens: {
      lg: { max: "1800px" },
      lgm: { max: "1140px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      about: "url('../paramarsh/src/components/2.jpg')",
      contact: "url('../paramarsh/src/components/3.jpg')",
      team: "url('../paramarsh/src/components/4.jpg')",
      event: "url('../paramarsh/src/components/5.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
