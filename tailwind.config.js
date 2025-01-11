/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        bounceTwice: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(0.8)' },
        },
      },
      animation: {
        bounceTwice: 'bounceTwice 3s ease-in-out',
      },
      screens: {
        'xs': '370px',
      },
    },
  },
  plugins: [],
};
