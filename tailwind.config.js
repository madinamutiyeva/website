module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content:[
    "./**/*.vue",
  ],
  theme: {
    extend: {
      colors:{
        buu: '#e1f65a',
        panel:'#202020',
        bkg: '#fafafa',
        black: '#171717',
        grey: '#ebebeb',
        green: '#00bd81',
        red: '#ff2e03',
        pt:'#808080'
      }
    },
    fontFamily:{
      sans:['Montserrat','sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    fontSize:{
      xxs: '9px',
      xl1: '20px',
      xl2: '24px',
      
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    
  ],
}