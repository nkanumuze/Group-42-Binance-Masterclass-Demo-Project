
let independence = '#4d5061';
let independenceB = '#f3ba2f';

let independenceHover = '#4A4C5F';
let independenceDark = '#2f333c';
let eerieBlack = '#232323'
let eerieBlackB = '#232323'


export const theme = (dark) => ({ 
   darkMode: dark,
   body: dark ? eerieBlack : 'white',
   // text
   textPrimary: independenceB,
   textSecondary: dark ? '#9ea0a1' : '#5A5A5A',
   text3: dark ? '#b3b3b3' : '#C5C5C5',
   textPale: dark ? '#red' : 'grey',
   textWhiteBlue: dark ? '#f3ba2f' : '#f3ba2f',

   // elements
   footerBackground: dark ? eerieBlack : '#f9f9f9',
   footerBorder: dark ? '#333' : '#eee',
   svgFooter: dark ? '#d8d8f6' : '#999',
   svgFooterHover: dark ? '#FFD25B' : '#FFC95B',
   addressBackground: dark ? '' : '#f9f9f9',

   backgroundPale: dark ? independence : '#f3f3f3',
   background2: dark ? independence : '#e9e9e9',
   background4: dark ? independence : '#dfdfdf',
   background3: dark ? independence : '#BDBDBD',
   backgroundError: dark ? '#301414' : '#fff8f8',

   independenceDark: dark ? independenceDark : '#f3ba2f',
   independenceDarkHover: dark ? '#23252C' : '#f8f8f8',
   backgroundPaleHover: dark ? independenceHover : '#E5E5E5',
   buttonPrimary: dark ? '#5A5A5A': '#9ea0a1' ,
   buttonBlueHover: dark ? '#5A5A5A': '#9ea0a1',
   buttonBlueText: independenceB,

   blue: '#588cff',
   lightBlue: '#128FFF',
   hoverBlue: '#0069e0',
   
   greyText: '#b3b3b3',
   darkGrey: '#303030'
});
