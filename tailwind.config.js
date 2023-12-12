/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        next: "url('./src/assets/images/icon-next.svg')",
      },
      fontSize: {
        sixteen: "16px",
      },
      colors: {
        Orange: " hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        Verydarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
};
