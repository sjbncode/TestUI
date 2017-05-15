// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import i18n from './extends/langLoader'
import ElementUI from 'element-ui'
import api from '@/api'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(vueResource)
Vue.use(ElementUI)

//auth
Vue.http.interceptors.push(function(request, next) {
  request.credentials=true;
  next();
});

//Element UI, 兼容 vue-i18n 6.x ，方案
Vue.locale=function(){}

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

