import type { Config } from 'tailwindcss'

export default {
  daisyui: {
    themes: ["business"],
  },
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config
