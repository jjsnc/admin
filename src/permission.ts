import router from './router'
import store from './store'

import { Message } from 'element-plus'

import { getToken } from './utils/auth' // get token from cookie

import getPageTitle from './utils/get-page-title'

// determine whether the user has logged in
const hasToken = getToken()

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach( async (to, from, next) => {
  // set page title
  document.title = getPageTitle(to.meta.title)

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/getInfo')
          console.log(roles,'roles')
          next();

        } catch (error) {}
      }
    }
  } else {
    console.log(to.path, 'to.path')
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
