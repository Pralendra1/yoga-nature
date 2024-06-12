import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yoga: "#5FFBBC",
      },
      fontFamily: {
        custom: ["Asap", "sans-serif"], // Specify your custom font family
      },
    },
  },
  plugins: [daisyui],
};
