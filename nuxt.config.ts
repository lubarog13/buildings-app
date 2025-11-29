// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/index.scss'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],
  image: {
    dir: 'assets/images',
  },
  routeRules: {
    '/_ipx/**': { prerender: true },
  },
  fonts: {
    families: [
      {
        name: 'TT Travels Next Trial Medium',
        provider: 'none',
        weights: ['600']
      },
      {
        name: 'TT Norms',
        provider: 'none',
        weights: ['400', '500', '600', '700']
      },
      {
        name: 'Inter',
        provider: 'google',
        weights: ['400', '500', '600', '700']
      }
    ]
  }
})