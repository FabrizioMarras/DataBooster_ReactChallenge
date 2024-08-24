import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7029df", // White
        secondary: "#9548F5", // Violet
      },
      fontFamily: {
        text: ["Helvetica", "Arial", "sans-serif"], // Titles
      },
      fontSize: {
        title: ["40px", { lineHeight: "46px", fontWeight: "700" }],
        normal: ["24px", { lineHeight: "32px", fontWeight: "400" }],
        small: ["20px", { lineHeight: "23px", fontWeight: "400" }],
      },
      borderRadius: {
        custom: "8px", 
      },
      spacing: {
        icon: "32px",
        radio: "24px", 
      },
      borderWidth: {
        radio: "2px", 
      },
      maxWidth: {
        custom: "1200px", 
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
