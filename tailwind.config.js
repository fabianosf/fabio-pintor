/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue:       '#0f2a4a',  // azul escuro principal
          'blue-mid': '#1a3f6f',  // azul médio
          'blue-light': '#1e4f8a',
          orange:     '#f97316',  // laranja destaque
          'orange-dark': '#ea6c0a',
        },
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
