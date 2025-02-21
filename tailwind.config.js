/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#0A0A0A",
        accent: {
          DEFAULT: "#C0FF00",
          hover: "#A8E600",
        },
        decent: {
          DEFAULT: "#FF9933",
          hover: "#FF6600",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0"},
          to: { height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)"},
          to: { height: "0" },
        },
      }
    },
  },
  plugins: [],
}

