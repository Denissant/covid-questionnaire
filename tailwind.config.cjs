/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['BPG Arial', 'sans-serif'],
      contractica: ['TBC Contractica CAPS', 'sans-serif']
    },
    extend: {
      colors: {
        'brand-lightgray': '#EAEAEA',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
