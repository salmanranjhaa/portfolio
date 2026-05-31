export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        night:   '#090b12',
        night2:  '#10131e',
        night3:  '#171b29',
        paper:   '#ece7dc',
        papersoft: '#cfc8ba',
        muted:   '#8c877b',
        gold:    '#d4af61',
        goldsoft:'#b8923a',
        burg:    '#bd4c5f',
        burgdeep:'#6b1e2c',
        rule:    'rgba(236,231,220,0.1)',
      },
      keyframes: {
        twinkle: {
          '0%,100%': { opacity: 'var(--o, 0.5)' },
          '50%': { opacity: 'calc(var(--o, 0.5) * 0.25)' },
        },
      },
      animation: {
        twinkle: 'twinkle var(--d, 4s) ease-in-out infinite',
      },
    },
  },
}
