import createSEOMeta from './utils/seo'

const meta = createSEOMeta()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ye Htet Aung',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'Ye Htet Aung' },
      {
        hid: 'description',
        name: 'description',
        content: 'A full-stack web developer',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@TonyYehtet99' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://yehtetaung.netlify.app',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/datocms',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http', '@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  // server: {
  //   port: 80,
  //   host: '0.0.0.0',
  // },

  router: {
    scrollBehavior() {
      return { x: 0, y: 0 }
    },
  },

  env: {
    Dato_CMS_TOKEN: process.env.DATO_CMS_TOKEN,
  },

  loading: {
    color: 'green',
  },
}
