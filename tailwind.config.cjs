/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['BPG Arial', 'sans-serif'],
      contractica: ['TBC Contractica CAPS', 'sans-serif'],
      anonymous: ['Anonymous Pro', 'monospace'],
    },
    extend: {
      spacing: {
        '22': '5.5rem',
        '50': '12.5rem'
      },
      colors: {
        'brand-black': '#232323',
        'brand-lightgray': '#EAEAEA',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
