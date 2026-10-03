/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parlour: {
          blush: '#FDF2F4',
          'blush-soft': '#FCE7EC',
          'blush-medium': '#F7C6D2',
          peach: '#FFF6F2',
          'peach-light': '#FFF0E8',
          cream: '#FAF7F2',
          'cream-dark': '#F0ECE4',
          rose: '#C97A8B',
          'rose-muted': '#B76678',
          'rose-dark': '#8E384A',
          burgundy: '#4A1525',
          'burgundy-dark': '#2E0B16',
          'burgundy-deep': '#1F060E',
          gold: '#C99E38',
          'gold-light': '#DFC278',
          'gold-accent': '#E8D39E',
          charcoal: '#2D282A',
          muted: '#6E6669',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(74, 21, 37, 0.07), 0 4px 6px -2px rgba(74, 21, 37, 0.03)',
        'soft-lg': '0 20px 40px -15px rgba(74, 21, 37, 0.12), 0 8px 12px -4px rgba(74, 21, 37, 0.05)',
        'glow-gold': '0 0 25px rgba(201, 158, 56, 0.25)',
        'glow-rose': '0 0 25px rgba(201, 122, 139, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
