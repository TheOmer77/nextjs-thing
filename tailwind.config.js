/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { sans: 'var(--font-family)' },
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(11rem, 1fr))',
      },
    },
  },
  plugins: [],
};
