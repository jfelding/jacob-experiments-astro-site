/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sandy: {
          50: 'rgb(var(--color-sandy-50) / <alpha-value>)',
          100: 'rgb(var(--color-sandy-100) / <alpha-value>)',
          200: 'rgb(var(--color-sandy-200) / <alpha-value>)',
          300: 'rgb(var(--color-sandy-300) / <alpha-value>)',
          400: 'rgb(var(--color-sandy-400) / <alpha-value>)',
          500: 'rgb(var(--color-sandy-500) / <alpha-value>)',
          600: 'rgb(var(--color-sandy-600) / <alpha-value>)',
          700: 'rgb(var(--color-sandy-700) / <alpha-value>)',
          800: 'rgb(var(--color-sandy-800) / <alpha-value>)',
          900: 'rgb(var(--color-sandy-900) / <alpha-value>)',
        },
        olive: {
          50: 'rgb(var(--color-olive-50) / <alpha-value>)',
          100: 'rgb(var(--color-olive-100) / <alpha-value>)',
          200: 'rgb(var(--color-olive-200) / <alpha-value>)',
          300: 'rgb(var(--color-olive-300) / <alpha-value>)',
          400: 'rgb(var(--color-olive-400) / <alpha-value>)',
          500: 'rgb(var(--color-olive-500) / <alpha-value>)',
          600: 'rgb(var(--color-olive-600) / <alpha-value>)',
          700: 'rgb(var(--color-olive-700) / <alpha-value>)',
          800: 'rgb(var(--color-olive-800) / <alpha-value>)',
          900: 'rgb(var(--color-olive-900) / <alpha-value>)',
        },
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(0.75rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 700ms ease-out both',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
