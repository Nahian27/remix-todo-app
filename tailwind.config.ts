import type { Config } from 'tailwindcss'

export default {
  daisyui: {
    themes: ["business", "corporate"],
  },
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config

