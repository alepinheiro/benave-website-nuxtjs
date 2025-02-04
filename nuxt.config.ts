// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      blogUrl:
        'https://public-api.wordpress.com/wp/v2/sites/alessandropsbra.wordpress.com/posts',
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    'nuxt-swiper',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  i18n: {
    defaultLocale: 'br',
    vueI18n: './i18n.config.ts',
    locales: [{ code: 'br', language: 'pt-BR' }],
  },
  fonts: {
    provider: 'google',
  },
});

