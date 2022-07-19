import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { transition: 'slide-right', title: 'Dashboard', icon: 'House', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: '/documentation/index',
        component: () => import('@/views/documentation/index.vue'),
        name: 'Documentation',
        meta: {
          transition: 'slide-right',
          title: 'Documentation',
          icon: 'Document',
          affix: true
        }
      }
    ]
  }
]

const routes: Array<RouteRecordRaw> = [
  ...constantRoutes,

  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/vuex.vue') // 懒加载组件
  },

  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  }
]
// console.log(import.meta.env.MODE, 'import.meta.env.MODE')
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
