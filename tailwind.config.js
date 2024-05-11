/** @type {import('tailwindcss').Config} */
const colors = {
  primary: {
    DEFAULT: "var(--primary)",
    light: "var(--primary-light)",
    100: "var(--primary-100)",
    500: "var(--primary-500)",
    800: "var(--primary-800)",
    hover: "var(--primary-hover)",
  },
  transparent: "var(--transparent)",
  current: "currentColor",
  inherit: "inherit",
  success: {
    DEFAULT: "var(--success)",
    100: "#e7f5ed",
    500: "#34ab66",
    700: "#226f42",
  },
  danger: {
    DEFAULT: "var(--danger)",
    100: "#fce9ea",
    500: "#e72f3c",
    700: "#971e26",
  },
  white: {
    DEFAULT: "var(--white)",
    200: "var(--white-200)",
    60: "var(--white-60)",
    700: "var(--white-700)",
    500: "var(--white-500)",
    600: "var(--white-600)",
    800: "var(--white-800)",
  },
  black: {
    DEFAULT: "var(--black)",
    200: "#232323",
    500: "var(--black-500)",
    'mate': '#131417',
  },
  yellow: "var(--yellow)",
  grey: "var(--gray)",
  "dark-gray": "var(--dark-gray)",
  modal: "var(--modal-bg)",
  label: "var(--label)",
};

const fontSize = {
  base: "1rem",
  xs: [
    "var(--text-xs)",
    {
      lineHeight: "1.4",
      fontWeight: "400",
    },
  ],
  sm: [
    "var(--text-sm)",
    {
      lineHeight: "1.5",
      fontWeight: "400",
    },
  ],
  md: "var(--text-md)",
  lg: "var(--text-lg)",
  xl: "var(--text-xl)",
  h1: "var(--text-h1)",
  h2: "var(--text-h2)",
  h3: "var(--text-h3)",
  h4: "var(--text-h4)",
  h5: "var(--text-h5)",
  h6: "var(--text-h6)",
  para: "var(--text-p)",
};

const fontWeight = {
  light: 300,
  regular: "400",
  medium: "500",
  bold: "700",
};

const fontFamily= {
  sans : ["'Plus Jakarta Sans', sans-serif"],
  serif : ["'Sora', sans-serif"],
}


const container = {
  center: true,
  padding: "calc(var(--js-gutter-x) * 0.5)",
  
};

const transitionProperty = {
  height: "height",
  spacing: "margin, padding",
  bg: "background-color",
};


module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/widgets/**/*.{js,jsx}"],
  theme: {
    colors,
    fontSize,
    container,
    screens: {
      xs: { max: "576px" },
      sm: "576px",
      md: "768px",
      lg: "992px", 
      xl: "1200px",
      xxl: "1420px",
      xxxl: "1600px",
      laptop: { min: "1200px", max: "1450px" },
    },
    extend: {
      fontWeight,
      transitionProperty,
      fontFamily
    },
  },
};
