import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowStu from '../views/ShowStu'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/ShowStu'
  },
  {
    path: '/ShowStu',
    name: 'ShowStu',
    component: ShowStu
  },
  {
    path: '/AddStu',
    name: 'AddStu',
    component: () => import(/* webpackChunkName: 'student' */ '../views/AddStu.vue')
  },
  {
    path: '/ListStu',
    name: 'ListStu',
    component: () => import(/* webpackChunkName: 'student' */ '../views/ListStu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
})

export default router
