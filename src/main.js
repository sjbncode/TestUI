// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import ElementUI from 'element-ui'
import i18n from './extends/langLoader'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */

router.beforeEach((from, to, next) => {
  window.scrollTo(0, 0)
  next()
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})

