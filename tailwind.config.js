/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F5C842',
          500: '#F0B429',
          600: '#D49E1F',
        },
        dark: {
          900: '#0D0D0D',
          800: '#1A1A1A',
          700: '#2A2A2A',
        },
        neutral: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D1D1D1',
          600: '#737373',
          700: '#525252',
          800: '#2A2A2A',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
        'gold': '0 4px 24px rgba(240,180,41,0.25)',
      }
    },
  },
  plugins: [],
}
