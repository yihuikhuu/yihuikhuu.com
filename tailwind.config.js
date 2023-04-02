const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "hsl(var(--accent-50) / <alpha-value>)",
          100: "hsl(var(--accent-100) / <alpha-value>)",
          200: "hsl(var(--accent-200) / <alpha-value>)",
          300: "hsl(var(--accent-300) / <alpha-value>)",
          400: "hsl(var(--accent-400) / <alpha-value>)",
          500: "hsl(var(--accent-500) / <alpha-value>)",
          600: "hsl(var(--accent-600) / <alpha-value>)",
          700: "hsl(var(--accent-700) / <alpha-value>)",
          800: "hsl(var(--accent-800) / <alpha-value>)",
          900: "hsl(var(--accent-900) / <alpha-value>)",
          950: "hsl(var(--accent-950) / <alpha-value>)",
        },
        // "accent-100": "rgb(var(--accent-100) / <alpha-value>)",
        // "accent-200": "rgb(var(--accent-200) / <alpha-value>)",
        // "accent-300": "rgb(var(--accent-300) / <alpha-value>)",
        // "accent-400": "rgb(var(--accent-400) / <alpha-value>)",
        // "accent-500": "rgb(var(--accent-500) / <alpha-value>)",
        // "accent-600": "rgb(var(--accent-600) / <alpha-value>)",
        // "accent-700": "rgb(var(--accent-700) / <alpha-value>)",
        // "accent-800": "rgb(var(--accent-800) / <alpha-value>)",
        // "accent-900": "rgb(var(--accent-900) / <alpha-value>)",
        // "accent-950": "rgb(var(--accent-950) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" fill="none" stroke="${value}"><path d="M0 .5H35.5.5V36"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
