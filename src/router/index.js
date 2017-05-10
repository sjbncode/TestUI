import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const Hello = (resolve) => { require(['@/views/Hello.vue'], resolve) }
const Hello2 = (resolve) => { require(['@/views/Hello2.vue'], resolve) }
const ViewProject = (resolve) => { require(['@/views/project/index.vue'], resolve) }
const NotFound = (resolve) => { require(['@/views/NotFound.vue'], resolve) }

var routes = [{path: '/', name: 'Home', component: Home},
{path: '/h1', name: 'Hello', component: Hello},
    {path: '/h2', name: 'Hello2', component: Hello2},
    {path: '/project/:oid', name: 'ViewProject', component: ViewProject},
    {path: '*', name: '404', component: NotFound}]
export default new Router({
  routes: routes,
  mode: 'history'
})
