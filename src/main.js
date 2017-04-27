// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuei18n from 'vue-i18n'
import langLoader from './extends/langLoader'
Vue.config.productionTip = false

Vue.use(Vuei18n)
Vue.mixin(langLoader)
const i18n = new Vuei18n({
  locale: 'ja',
  messages: {
    ja: {
      hello: 'こんにちは'
    },
    en: {
      hello: 'helloxxx'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
