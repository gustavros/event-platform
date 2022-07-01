/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*tsx"],
  theme: {
    extend: {
      screens: {
        xg: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1140px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "800px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "580px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "425px" },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        blur: "url(src/assets/blur.png)",
      },

      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        blue: {
          500: "#81D8F7",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
    },
  },
  plugins: [],
};
