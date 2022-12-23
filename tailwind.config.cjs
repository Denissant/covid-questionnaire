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
      fontSize: {
        '1.5xl': ['1.375rem', {
          lineHeight: '1.875rem',
        }],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '45': '11.25rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '128': '32rem',
        '146': '36.5rem',
        '156': '39rem',
        '160': '40rem',
      },
      colors: {
        'brand-black': '#232323',
        'brand-gray': '#626262',
        'brand-link': '#1289AE',
        'brand-lightblue': '#208298',
        'brand-lightgray': '#EAEAEA',
        'brand-orange': '#F15524',
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
