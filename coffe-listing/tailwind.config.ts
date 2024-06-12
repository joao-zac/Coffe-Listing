import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'var-darkGrey': '#1B1D1F',
        'var-black': '#111315',
        'var-grey': '#6F757C',
        'var-lightBlue': '#BEE3CC',
        'var-white': '#FEF7EE',
        'var-lightYellow': '#F6C768',
        'var-lightRed': '#ED735D'
      },

      backgroundImage: {
        'mybeck': "url('../public/bg-cafe.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
