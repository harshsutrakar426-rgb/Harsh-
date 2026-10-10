export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        panel: '#101315',
        text: '#f5f7fb',
        muted: '#a7b3c2',
        cyan: '#53d6ff',
        blue: '#3a82ff',
        violet: '#8d74ff',
      },
      boxShadow: {
        glow: '0 0 30px rgba(83,214,255,0.12)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
