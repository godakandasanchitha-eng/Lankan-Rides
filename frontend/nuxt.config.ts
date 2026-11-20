import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    (_options, nuxt) => {
      nuxt.hook('modules:done', () => {
        nuxt.hook('prepare:types', ({ tsConfig }) => {
          if (tsConfig.vueCompilerOptions?.plugins) {
            tsConfig.vueCompilerOptions.plugins = tsConfig.vueCompilerOptions.plugins.filter(
              (p: any) => typeof p === 'string' ? !p.includes('vue-router') : !p.name?.includes('vue-router')
            )
          }
        })
      })
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
    },
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Lanka Rides | Explore Sri Lanka in Comfort',
      meta: [
        {
          name: 'description',
          content: 'Private rides, airport transfers, and island tours across Sri Lanka.',
        },
        { name: 'theme-color', content: '#f8f7f3' },
      ],
    },
  },
})