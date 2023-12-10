/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html' ],
  theme: {
    extend: {

      colors: {
        'header': {
          light: '#233056',
          DEFAULT: '#233056',
          dark: '#233056',
        },
        'bg-body': {
          light: '#090c15',
          DEFAULT: '#090c15',
          dark: '#090c15',
        },
        'logo': {
          light: '#026e00',
          DEFAULT: '#026e00',
          dark: '#026e00',
        },
        'ft': {
          light: '#9bc3d4',
          DEFAULT: '#9bc3d4',
          dark: '#9bc3d4',
        },

        'lk': {
          light: '#80b561',
          DEFAULT: '#80b561',
          dark: '#80b561',
        },
      },

    },
  },
  plugins: [],
}

