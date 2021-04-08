export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sneakhub',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo-white.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Roboto:wght@300&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  firebase: {
    config: {
      apiKey: 'AIzaSyDLIVSnCUlKPPkhgZ1_b4ZR7XuLEaWUtJQ',
      authDomain: 'sneakhub-25a5e.firebaseapp.com',
      projectId: 'sneakhub-25a5e',
      storageBucket: 'sneakhub-25a5e.appspot.com',
      messagingSenderId: '484877558885',
      appId: '1:484877558885:web:09bad26babb70c69b3d28c',
      measurementId: 'G-XGN4GT11FM',
    },
    services: {
      firestore: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // SPA mode
  ssr: false,
}
