import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
    },
  },
  app: {
    head: {
      title: 'Lanka Rides | Explore Sri Lanka in Comfort',
      meta: [
        { name: 'description', content: 'Private rides, airport transfers, and island tours across Sri Lanka.' },
        { name: 'theme-color', content: '#f8f7f3' },
      ],
    },
  },
})
