/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    backgroundImage: {
      'bg-pattern': "url('assests/images/bg-image1.png')",
      'bg-texture': "url('assests/images/bg-image2.jpeg')",
    },
    extend: {
      fontFamily: {
        Playfair: ['Playfair Display', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        Sharetech: ['Share Tech', 'sans-serif'],
      },
    },
  },
  plugins: [],
}




