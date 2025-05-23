/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderShine: {
          '0%': { transform: 'rotate(0deg)', opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { transform: 'rotate(360deg)', opacity: '0.5' },
        },
      },
      animation: {
        borderShine: 'borderShine 2s linear infinite',
      },
    },
  },
  plugins: [],
}

