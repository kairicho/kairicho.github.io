/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          secondary: '#111111',
        },
        text: {
          DEFAULT: '#ffffff',
          secondary: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#00d4ff',
          secondary: '#7c3aed',
          tertiary: '#06b6d4',
        },
        border: '#1f1f23',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(135deg, #00d4ff, #7c3aed)',
        'gradient-main': 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #06b6d4 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, #111111 0%, #0a0a0a 70%)',
      },
      fontFamily: {
        sans: ['Fira Code', 'Hack', 'Source Code Pro', 'SF Mono', 'Monaco', 'Inconsolata', 'Ubuntu Mono', 'Roboto Mono', 'Menlo', 'Consolas', 'monospace'],
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
