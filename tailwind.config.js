/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': {
            textShadow: '0 0 5px #fff, 0 0 15px #00f0ff, 0 0 20px #00f0ff',
          },
          '50%': {
            textShadow: '0 0 10px #fff, 0 0 20px #00f0ff, 0 0 30px #00f0ff',
          },
          '100%': {
            textShadow: '0 0 5px #fff, 0 0 15px #00f0ff, 0 0 20px #00f0ff',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
