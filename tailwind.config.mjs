import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },


      colors: {
        olive: {
          DEFAULT: '#F8FAF2',
          '50': '#F8FAF2',
          '100': '#F2F4E6',
          '200': '#DDE0C1',
          '300': '#C7CB9B',
          '400': '#B0B474',
          '500': '#A2AB8C',
          '600': '#7E846F',
          '700': '#5B6052',
          '800': '#373A35',
          '900': '#141613',
        },
        sandy: {
          DEFAULT: '#fffcf5', // Default color
          '50': '#fefdfb',    // Lightest shade
          '100': '#fcf9ee',   // Lighter shade
          '200': '#f7f3d5',   // Light shade
          '300': '#e3d7ab',   // Medium shade
          '400': '#cfc182',   // Medium-dark shade
          '500': '#b9a55c',   // Dark shade
          '600': '#9c8743',   // Darker shade
          '700': '#7e6a2c',   // Even darker shade
          '800': '#5f4c16',   // Darkest shade
          '900': '#412e00',   // Deepest shade
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
