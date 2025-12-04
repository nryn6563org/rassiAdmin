export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rassi__Admin',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'stylesheet', url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-std.min.css', crossorigin: 'anonymous' }],
    script: [{ src: 'https://cdn.jsdelivr.net/gh/KaneCohen/modal-vanilla@master/dist/index.js', defer: true }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/common.css', '~/assets/css/custom-btn.css', '~/assets/css/custom-tab.css', '~/assets/css/custom-table.css', '~/assets/css/custom-modal.css', 'animate.css/animate.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/modal-vanilla.client.js', '~/plugins/global-modal.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {} // 기본 설정 사용
        }
      }
    }
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    // Vue transition 속성에 animate.css 클래스 매핑
    enterActiveClass: 'animate__animated animate__fadeIn animate__faster',
    leaveActiveClass: 'animate__animated animate__fadeOut animate__faster'
  },
  router: {
    // 저장소 이름을 경로의 베이스로 설정합니다. (예: /my-repo-name/)
    base:'RassiAdmin'
  },
  target: 'static'
}
