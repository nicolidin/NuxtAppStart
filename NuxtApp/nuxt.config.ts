// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  srcDir: 'src/', // Tell Nuxt to use the `src` directory
  target: 'static',
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxtjs/i18n', '@nuxt/image'],

  plugins: [
    '~/plugins/vuetify.ts'
  ],

  nitro: {
    debug: true, // Affiche des logs détaillés dans la console
  },

  routeRules: {
    '/': { ssr: true},
  },

  router: {
    middleware: [],
  },

  image: {
    domains: [process.env.APP_BASE_URL]
  },

  css: [
    // 'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css', // Icônes Material Design
    '@/assets/main.scss'
  ],
  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    public: {
      appBaseUrl: process.env.APP_BASE_URL, // accessible both in cs and ss
    },

    // accessible only in ss
    strapiBearerToken: process.env.STRAPI_BEARER_TOKEN,
    strapiBaseUrl: process.env.STRAPI_BASE_URL,
  },

  nitro: {
    routeRules: {
    },
  },
  // Based on docs found here - https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``
        }
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
  }
})
