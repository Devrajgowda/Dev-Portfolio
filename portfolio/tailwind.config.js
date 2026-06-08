/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg: {
          primary:   'rgb(var(--bg-primary)   / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          card:      'rgb(var(--bg-card)      / <alpha-value>)',
        },
        accent: {
          purple:       '#171a20',
          'purple-light': '#474747',
          blue:         '#171a20',
          cyan:         '#171a20',
          magenta:      '#171a20',
        },
        border: {
          DEFAULT: 'rgb(var(--border)       / <alpha-value>)',
          light:   'rgb(var(--border-light) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #171a20, #2d2d2d)',
        'gradient-hero':   'linear-gradient(135deg, #171a20, #474747)',
      },
      boxShadow: {
        'card-soft':   '0 2px 16px rgba(0, 0, 0, 0.06)',
        'inner-grid':  'inset 0 1px 0 rgba(0,0,0,0.04)',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.8)' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-7px)' },
        },
        photoIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        'fade-in-up':     'fadeInUp 0.6s ease forwards',
        'fade-in':        'fadeIn 0.5s ease forwards',
        pulse2:           'pulse2 2s ease infinite',
        'slide-down':     'slideDown 0.25s ease forwards',
        'float-slow':     'floatSlow 6s ease-in-out infinite',
        'float-slower':   'floatSlower 7.5s ease-in-out infinite',
        'photo-in':       'photoIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}
