/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1A5A4C',
        'sub-text': '#687480',
        orange: '#F14A27',
        description: '#4E4E4E',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
        IBMPlexSans: ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'museum-front':
          'url(./src/assets/Natsionalnij-hudozhnij-muzej-Ukrayini-Kiyiv-10-1800x1200.png)',
        'lecture-image':
          'url(./src/assets/09017e62cd8b96fa78cfd0b9cad36c20.jpg)',
        'subscribe-image':
          'url(../public/images/f455f3b8289d519bbaeb4fa35a9a0c53.jpg)',
      },
      backgroundSize: {
        '50%': '50%',
      },

      gridTemplateColumns: {
        menuMobile: '100px 100px',
        menuDesktop: '170px 170px',
        mobile: '0 repeat(2, minmax(0, 1fr)) 0',
        tablet: 'minmax(0, 9px) repeat(6, minmax(0, 1fr)) minmax(0, 9px)',
        desktop: 'minmax(0, 25px) repeat(12, minmax(0, 1fr)) minmax(0, 25px)',
      },
    },
  },
  plugins: [],
};
