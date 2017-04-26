import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './component/app.vue'
import routes from './router';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
     mode: 'history',
    routes:routes
});
router.beforeEach((from,to,next) => {
    window.scrollTo(0, 0);
    next();
});
// router.afterEach(() => {

// });

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
});