import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        DEFAULT: '#2A3036',
        dark: '#1C2126',
      },
      lime: '#E0FE10',
    },
  },
}
