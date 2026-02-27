/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1869b4",
        secondary: "#fd7e14",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        slideUp: "slideUp 0.9s ease-in-out forwards",
        wave: "wave 8s -3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      transitionProperty: {
        height: "height",
      },
      // Custom utility classes for animation delays
      utilities: {
        ".animation-delay-100": {
          "animation-delay": "100ms",
        },
        ".animation-delay-200": {
          "animation-delay": "200ms",
        },
        ".animation-delay-300": {
          "animation-delay": "300ms",
        },
        ".animation-delay-400": {
          "animation-delay": "400ms",
        },
        ".animation-delay-500": {
          "animation-delay": "500ms",
        },
      },
    },
  },
  plugins: [],
};
