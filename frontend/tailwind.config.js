import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#FFE6C7",
        subheading: "#454545",
        accent: "#FFF3E2",
        mar: "#38150A",
        offwhite: "#FAF9F6",
      },

      fontFamily: {
        custom: ["Asap", "sans-serif"], // Specify your custom font family
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": {
            transform: "scale(1)",
            transformOrigin: "center center",
          },
          "50%": { transform: "scale(1.1)", transformOrigin: "center center" },
        },
      },
      animation: {
        zoomInOut: "zoomInOut 10s ease-in-out infinite",
      },
    },
  },
  plugins: [daisyui],
};
