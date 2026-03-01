/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 可爱马卡龙色系
        cute: {
          pink: '#FFB5BA',      // 糖果粉
          peach: '#FFC3A0',     // 蜜桃橙
          mint: '#B8F2E6',      // 薄荷绿
          lavender: '#E0BBE4',  // 薰衣草紫
          blue: '#AEC6CF',      // 天空蓝
          yellow: '#FFF4BD',    // 奶油黄
          coral: '#FF9AA2',     // 珊瑚红
          periwinkle: '#C7CEEA', // 长春花蓝
        },
        // 主题色
        primary: {
          50: '#FFF4BD',
          100: '#FFE5CC',
          200: '#FFD4DC',
          300: '#FFB5BA',
          400: '#FF9AA2',
          500: '#FF6B9D',
          600: '#FF4D94',
          700: '#E01E6C',
          800: '#B0155A',
          900: '#800F48',
        },
      },
      fontFamily: {
        'cute': ['"Nunito"', '"Quicksand"', '"Varela Round"', 'system-ui', 'sans-serif'],
        'fun': ['"Fredoka One"', '"Comic Sans MS"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'pop': '0 8px 30px rgba(255, 107, 157, 0.3)',
        'pop-lg': '0 12px 40px rgba(255, 107, 157, 0.4)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(255, 107, 157, 0.5)',
      },
      animation: {
        'bounce-soft': 'bounce-soft 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
