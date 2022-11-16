export default {
  head: {
    title: '迷之de小孩灬',
    htmlAttrs: {
      lang: 'zh-cn',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['element-ui/lib/theme-chalk/index.css'],

  plugins: ['@/plugins/element-ui'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: '/',
  },

  build: {
    transpile: [/^element-ui/],
  },
}
