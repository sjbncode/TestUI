import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const Hello = (resolve) => { require(['@/components/Hello.vue'], resolve) }
const Hello2 = (resolve) => { require(['@/components/Hello2.vue'], resolve) }
const NotFound = (resolve) => { require(['@/components/NotFound.vue'], resolve) }

var routes = [{path: '/', name: 'Home', component: Home},
{path: '/h1', name: 'Hello', component: Hello},
    {path: '/h2', name: 'Hello2', component: Hello2},
    {path: '*', name: '404', component: NotFound}]
export default new Router({
  routes: routes,
  mode: 'history'
})
