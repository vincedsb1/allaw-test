import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "16": "16px",
        "15": "15px",
        "14": "14px",
      },
      lineHeight: {
        "22": "21.79px",
      },
    },
  },
  plugins: [],
};
export default config;
