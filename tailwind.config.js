/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html' , 
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        'slategray' : '#69707D' , 
        'dark-orange' : '#FF7E1B' , 
        'very-dark-gray' : '#1D2026' , 
        'silver' : '#B6BCC8' , 
        'lavender' : '#E4E9F2' , 
        'ghost-white' : '#F6F8FD' , 
        'linen' : '#FFEEE2' 
      } , 
      fontFamily : {
        'kumbh-sans' : ['"Kumbh Sans", sans-serif']
      }
    },
  },
  plugins: [],
}

