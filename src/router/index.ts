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
    path: '/member',
    component: Layout,
    redirect: '/member/blacklist',
    alwaysShow: true, // will always show the root menu
    name: '用户管理',
    meta: {
      title: 'member',
      icon: 'lock',
    },
    children: [
      {
        path: '/member/blacklist',
        component: () => import('@/views/member/blacklist/index.vue'),
        name: '黑名单管理',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/member/list',
        component: () => import('@/views/member/list/index.vue'),
        name: '用户',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },
  {
    path: '/supplier',
    component: Layout,
    redirect: '/supplier/blacklist',
    alwaysShow: true, // will always show the root menu
    name: '商户管理',

    children: [
      {
        path: '/supplier/supplierSet',
        component: () => import('@/views/supplier/supplierSet/index.vue'),
        name: '商户管理',

      },
      {
        path: '/supplier/storeSet',
        component: () => import('@/views/supplier/storeSet/index.vue'),
        name: '酒店管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
    ]
  },


]

const routes: Array<RouteRecordRaw> = [
  ...constantRoutes,
]
// console.log(import.meta.env.MODE, 'import.meta.env.MODE')
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
