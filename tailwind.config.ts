import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:     '#0a0a0f',
        orange: '#ff6400',
        green:  '#00ff88',
        greenBtn: '#0d7a3e',
        blue:   '#2c3ee8',
      },
      fontFamily: {
        arabic: ['var(--font-ibm)', 'sans-serif'],
        sans:   ['var(--font-ibm)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
