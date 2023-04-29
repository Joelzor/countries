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
        "light-text": "hsl(200, 15%, 8%)",
        "light-input": "hsl(0, 0%, 52%)",
        "light-background": "hsl(0, 0%, 98%)",
        "dark-elements": "hsl(209, 23%, 22%)",
        "dark-background": "hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
