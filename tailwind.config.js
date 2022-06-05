module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#070724",
        darkGray: "#38384F",
        lightGray: "#838391",
        lightBlue: "#419EBB",
        darkBlue: "#2D68F0",
        sunYellow: "#EDA249",
        purple: "#6F2ED6",
        lightOrange: "#CD5120",
        darkOrange: "#D14C32",
        red: "#D83A34",
        green: "#1EC2A4",
      },
      maxWidth: {
        readable: "65ch",
      },
      backgroundImage: {
        backgroundStars: 'url("./assets/background-stars.svg")',
      },
      animation: {
        "spin-slow": "planetSpin 4s linear infinite",
      },
      keyframes: {
        planetSpin: {
          "0%, 100%": { transform: "rotateY(90deg)" },
          "50%": { transform: "rotateY(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
