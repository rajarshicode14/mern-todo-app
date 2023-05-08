/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Signika': ['Signika Negative Light Light'],
        'Pusher': ['pusher']
      },
    },
  },
  plugins: [],
}

