import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          200: "#B54FBF",
          300: "#302375",
        },
        secondary: {
          200: "#050416",
          300: "#030309",
          100: "#FACC15",
        },
        tertiary: {
          200: "#251DB5",
        },
        paragraph: {
          200: "#fff",
        },
        buttonGray: {
          200: "#0E0B49",
          300: "#313441",
        },
        red: {
          200: "#FF0000",
        },
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(to right bottom, #17126C, #251DB4)",
        "card-gradient":
          "linear-gradient(to  bottom,  #251DB5 40% , #000000 90%)",
        "button-gray":
          "linear-gradient(to  bottom,  #110D52 40% , #050418 90%)",
        "instagram-gradient":
          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      },
      animation: {
        "gradient-border": "gradient-border 5s infinite",
      },
      keyframes: {
        "gradient-border": {
          "0%": {
            "border-image-source": "linear-gradient(45deg, #17126C, #251DB4)",
          },
          "50%": {
            "border-image-source":
              "linear-gradient(45deg, #17126C, #251DB4, #17126C)",
          },
          "100%": {
            "border-image-source": "linear-gradient(45deg, #251DB4, #17126C)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
