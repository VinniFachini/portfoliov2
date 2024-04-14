// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/reset.css',
  ],
  modules: [
    '@pinia/nuxt',
    'vue3-carousel-nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
