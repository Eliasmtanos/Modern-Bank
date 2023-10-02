/** @type {import('tailwindcss').Config} */
export default {
  content: [     "./src/**/*.{js,jsx,ts,tsx}",     ],
  theme: {
    extend: {
      colors:{  
      primary:'#000',
      secdondary:'#00f6ff',
      dimwhite:'rgba(255,255,255,0.7)',
      dimblue: 'rgba(9,151,124,0.1)'
      },
      fontFamily:{
        poppins:["poppoins", "sans-serif"],
      },
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"720px",
      md:"1060px",
    }
  },
  plugins: [],
}

