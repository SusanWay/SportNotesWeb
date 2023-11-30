// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  eslint: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/assets/**'],
  },
  googleFonts: {
    families: {
      Roboto: {
        wght: [300, 400, 800],
      },
      Arvo: {
        wght: [400, 700],
      },
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  convertColors: {
                    currentColor: true,
                  },
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      }),
    ],
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL || '/api',
    },
  },
})
