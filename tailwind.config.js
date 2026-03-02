/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 颜色系统
      colors: {
        // 主品牌色 - Teal
        brand: {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#009688',
          600: '#00897B',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40',
        },
        // 模块配色
        module: {
          cards: {
            DEFAULT: '#FF9800',
            light: '#FFF3E0',
            dark: '#F57C00',
          },
          game: {
            DEFAULT: '#03A9F4',
            light: '#E1F5FE',
            dark: '#0288D1',
          },
          story: {
            DEFAULT: '#E91E63',
            light: '#FCE4EC',
            dark: '#C2185B',
          },
          report: {
            DEFAULT: '#607D8B',
            light: '#ECEFF1',
            dark: '#455A64',
          },
        },
        // 功能色
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        info: '#2196F3',
      },
      // 字体系统
      fontFamily: {
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      // 圆角
      borderRadius: {
        '4xl': '2rem',
      },
      // 阴影
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      // 动画
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
