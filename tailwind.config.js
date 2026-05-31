/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        sidebar: '#111111',
        cream: '#f9f7f2',
        accent: '#c94c26',
        'accent-light': '#f0ece4',
        card: '#ffffff',
        border: '#e8e4da',
        'text-muted': '#7a7a7a',
      },
    },
  },
  plugins: [],
}
