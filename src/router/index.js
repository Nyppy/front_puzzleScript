import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/editor/:id',
    name: 'Editor',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/private-office',
    name: 'PrivateOffice',
    component: () => import('../views/PrivateOffice.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
