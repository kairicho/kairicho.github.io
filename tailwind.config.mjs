/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          secondary: 'var(--bg-secondary)',
        },
        text: {
          DEFAULT: 'var(--text)',
          secondary: 'var(--text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
        },
        border: 'var(--border)',
      },
      backgroundImage: {
        'gradient-text': 'var(--gradient-text)',
        'gradient-main': 'var(--gradient)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--bg-secondary) 0%, var(--bg) 70%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'fade-in-up-delay-1': 'fadeInUp 1s ease-out 0.2s both',
        'fade-in-up-delay-2': 'fadeInUp 1s ease-out 0.4s both',
        'fade-in-up-delay-3': 'fadeInUp 1s ease-out 0.6s both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
