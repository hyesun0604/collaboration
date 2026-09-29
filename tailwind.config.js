/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1EA',
        card: '#FFFFFF',
        maroon: {
          DEFAULT: '#8C3A3A',
          light: '#F3E3E0',
        },
        ink: '#242220',
        muted: '#9A938A',
      },
      fontFamily: {
        sans: ['"Pretendard"', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
