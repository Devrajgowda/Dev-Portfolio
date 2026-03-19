/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg: {
          primary:   'rgb(var(--bg-primary)   / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          card:      'rgb(var(--bg-card)      / <alpha-value>)',
        },
        accent: {
          purple: '#a38bff',
          'purple-light': '#d0b8ff',
          blue: '#6ec8ff',
          cyan: '#63ffd7',
          magenta: '#f5a3ff',
        },
        border: {
          DEFAULT: 'rgb(var(--border)       / <alpha-value>)',
          light:   'rgb(var(--border-light) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #a38bff, #7c3aed)',
        'gradient-hero': 'linear-gradient(135deg, #a38bff 0%, #6ec8ff 100%)',
      },
      boxShadow: {
        'card-soft': '0 20px 60px rgba(4, 6, 20, 0.55)',
        'inner-grid': 'inset 0 1px 0 rgba(255,255,255,0.03)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinSlowReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in-up-slow': 'fadeInUp 0.9s ease forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease forwards',
        'fade-in-right': 'fadeInRight 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        float: 'float 4s ease-in-out infinite',
        'spin-slow': 'spinSlow 14s linear infinite',
        'spin-slow-reverse': 'spinSlowReverse 20s linear infinite',
        pulse2: 'pulse2 2s ease infinite',
        'scroll-dot': 'scrollDot 1.5s ease infinite',
        shimmer: 'shimmer 3s linear infinite',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}
