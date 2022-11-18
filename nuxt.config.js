import path from 'path'
import globalConfig from './configs/index'
export default {
  head: {
    title: '迷之de小孩灬',
    htmlAttrs: {
      lang: 'zh-cn',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '有些迷茫，但又有些梦想',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'author',
        name: 'author',
        content: '迷之de小孩灬,lginsane',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '迷之de小孩灬,lginsane,个人博客,前端文章,前端博客,前端技术,美食,音乐',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/index.less'],

  plugins: ['@/plugins/element-ui'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  modules: [
    '@nuxtjs/axios',
    '@pinia/nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    less: '@/assets/css/variables.less',
  },
  toast: {
    theme: 'bubble',
    position: 'top-center',
    duration: 3000,
    singleton: false,
    iconPack: 'custom-class',
  },
  axios: {
    proxy: process.env.NODE_ENV === 'development',
    baseURL: globalConfig.baseURL,
  },
  proxy: {
    '/api': {
      target: globalConfig.baseURL,
      changeOrigin: true,
    },
  },

  build: {
    vendor: ['element-ui'],
    extend(config, ctx) {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icons/svg')]
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/icons/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        },
      })
    },
  },
  env: {
    baseUrl: globalConfig.baseURL,
  },
  telemetry: false,

  loading: {
    color: 'red',
    height: '4px',
  },
}
