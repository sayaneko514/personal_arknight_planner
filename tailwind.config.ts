import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      padding: {
        '25': '25px',
      },
      maxWidth: {
        '1/2': '50%',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      colors: {
        primary: '#1c1c1c',
        secondary: '#868686',
        tertiary: '#e4e4e4',
        primaryBlue: '#199cd6',
        darkBlue: '#0f5d80',
        lightBlue: '#75c3e6',
        primaryGold: '#aea255',
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
} satisfies Config;
