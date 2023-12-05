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
      lime: {
        DEFAULT: '#628009',
        light: '#E0FE10',
      },
      red: '#B8282B',
    },
    fontFamily: {
      sans: ['Arvo', 'sans-serif'],
      title: ['Roboto', 'sans-serif'],
    },
  },
}
