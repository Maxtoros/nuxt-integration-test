// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image'],
  css: ['~/assets/styles/index.css'],
  fonts: {
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'Larken', provider: 'none' },
      { name: 'Lato', provider: 'none' },
    ]
  }
})