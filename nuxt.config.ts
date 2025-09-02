// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      blogUrl: import.meta.env.NUXT_BLOG_URL,
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
    'nuxt-aos',
    'nuxt-vitalizer',
    '@nuxtjs/mdc',
    '@stefanobartoletti/nuxt-social-share',
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
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  app: {
    head: {
      title: 'Benavê Engenharia',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        {
          name: 'description',
          content: 'Transformamos ideias em energia, soluções em inovação.',
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Benavê Engenharia' },
        { property: 'og:title', content: 'Benavê Engenharia' },
        {
          property: 'og:description',
          content: 'Transformamos ideias em energia, soluções em inovação.',
        },
        { property: 'og:url', content: 'https://benave.com.br' },
        { property: 'og:image', content: '/img/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
      ],
    },
  },

  // routeRules: {
  //   '/blog/categorias/pagina-inicial': {
  //     redirect: '/blog/',
  //   },
  //   '/api/posts/**': {
  //     cache: {
  //       maxAge: 60 * 60,
  //     },
  //   },
  // },

  socialShare: {
    baseUrl: 'https://www.benave.com.br',
  },
});
