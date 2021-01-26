require('dotenv').config()

export default {
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: "user-id",
  //       path: "/user/:id?",
  //       component: resolve(__dirname, 'pages/user/_id.vue'),
  //       children: [{
  //     path: "work/PopupBase",
  //       component: resolve(__dirname, 'pages/index/work/PopupBase.vue'),
  //     name: "user-work-PopupBase"
  //   }, {
  //     path: "work/PopupLightbox",
  //       component: resolve(__dirname, 'pages/index/work/PopupLightbox.vue'),
  //     name: "user-work-PopupLightbox"
  //   }, {
  //     path: "work/PopupOverlay",
  //       component: resolve(__dirname, 'pages/index/work/PopupOverlay.vue'),
  //     name: "user-work-PopupOverlay"
  //   }, {
  //     path: "work/PopupRouterView",
  //       component: resolve(__dirname, 'pages/index/work/PopupRouterView.vue'),
  //     name: "user-work-PopupRouterView"
  //   }, {
  //     path: "/work/:id?",
  //       component: resolve(__dirname, 'pages/index/work/_id.vue'),
  //     name: "user-work-id"
  //   }]
  //     })
  //   }
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/router',
    // '@nuxtjs/router-extras',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
