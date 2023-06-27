/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    'outline-yellow',
  ],

  theme: {
    fontFamily: {
      display: ['Gilroy-Regular', 'sans-serif'],
      regular: ['Gilroy-Regular', 'sans-serif'],
      bold: ['Gilroy-Bold', 'sans-serif'],
      semibold: ['Gilroy-SemiBold', 'sans-serif'],
      medium: ['Gilroy-Medium', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        'main-bg': '#FCFCFC',
        'yellow-bg': '#FFA500',
        'secondary-bg': '#F2F5F9',
        'deep-white-bg': '#FAFAFA',
        'icon-bg': '#E5EBF2',
      },
      maxWidth: {
        'pd': '131px',
        'piw': '85px',
      },

      maxHeight: {
        'mh': '132px'
      },

      borderRadius: {
        'sm': "10px",
        'main-br': "50px",
        'bg-br': "32px",
      },
      padding: {
        13: "13px"
      },
      colors: {
        'yellow': "rgba(255, 165, 0, 1)",
        'black': 'rgba(68, 68, 68, 1)',
        'secondary-text': "rgba(231, 231, 231, 1)",
        'blue': 'rgba(2, 62, 138, 1)',
        'bd-black': 'rgba(206, 206, 206, 1)',
        'light-black': 'rgba(136, 136, 136, 1)'
      },
      height: {
        194: '194px',
        120: '120px',
        118: '118px',
        600: '600px',
        132: '132px',
        131: '132px',
        160: "160px",
        300: "300px",
        305: "305px",
        45: "45px",
  
      },
      width: {
        345: "345px",
        450: '450px',
        100: "100px",
        85: '85px',
        45: "45px",
        160: "160px",
      },

      boxShadow: {
        'bs': '0px, 3px rgba(218, 218, 218, 0.25)',
      },
      
      minWidth: {
        "sb": "300px"
      }, 

      borderWidth: {
        0.5: "0.5px"
      }

  
      
    },
  },
  plugins: [],
}

