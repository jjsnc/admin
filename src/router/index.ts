import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/vuex.vue') // 懒加载组件
  },

  {
    path: '/axios',
    name: 'Axios',
    component: () => import('../views/axios.vue') // 懒加载组件
  }
]
// console.log(import.meta.env.MODE, 'import.meta.env.MODE')
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
