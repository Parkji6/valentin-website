/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Folio accent — indigo/periwinkle. Remapping `blue` recolors every
        // existing `blue-*` accent across the site in one place.
        blue: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: '#6366f1',
        // Folio dark surfaces — near-black with a faint cool tint.
        ink: {
          950: '#08080c',
          900: '#0e0e14',
          800: '#16161f',
          700: '#1f1f2b',
          600: '#2a2a38',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        'card-dark': '0 1px 2px rgba(0,0,0,0.3), 0 12px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
