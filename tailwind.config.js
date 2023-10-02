/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-mobile": "url(public/images/bg-main-mobile.png)",
        "main-desktop": "url(public/images/bg-main-desktop.png)",
        "card-back": "url(public/images/bg-card-back.png)",
        "card-front": "url(public/images/bg-card-front.png)",
      },
      colors: {
        LightGrayishViolet: "hsl(270, 3%, 87%)",
        DarkGrayishViolet: "hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
        errors: "hsl(0, 100%, 66%)",
      },
      fontSize: {
        custom: "18px",
      },
    },
  },
  plugins: [],
};
