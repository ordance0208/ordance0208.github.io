/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#1977D4',
        'bg-dark': '#0A152E',
        'light': '#FAFAFA',
        'dark': '#333333'
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translate(-50%, -30px)' },
        },
        'left-right': { '0': { transform: 'translateX(10%)' }, '100%': { transform: 'translateX(-74%)' } },
        'fly-in': {
          '0%': { transform: 'translateY(20%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
        'fly-out': {
          '0%': { transform: 'translateY(0%)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 1 },
        },
        grow: {
          '0%': { transform: 'scale(0)', opacity: 0.25 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        scroll: 'scroll 2s linear alternate infinite',
        grow: 'grow 500ms ease',
        'fly-in': 'fly-in 200ms linear',
        'fly-in-delay': 'fly-in 200ms linear forwards 300ms',
        'fly-out': 'fly-out 300ms linear forwards',
        'left-right': 'left-right 40s linear alternate infinite',
      },
      screens: {
        xs: '380px',
        tall: { raw: '(max-height: 540px)' },
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
};
