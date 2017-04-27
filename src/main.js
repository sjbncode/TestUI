// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuei18n from 'vue-i18n'
Vue.config.productionTip = false

// var messages = {en: {hello: 'Hello world'}}
// var locale = new Vuei18n({
//   locale: 'en',
//   messages: messages
// })

Vue.use(Vuei18n)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
