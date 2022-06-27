import router from './router'
import store from './store'

import { Message } from 'element-plus'

import { getToken } from './utils/auth' // get token from cookie

import getPageTitle from './utils/get-page-title'

  // determine whether the user has logged in
  const hasToken = getToken()

  const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to :any, from:any, next:any)=>{
  // set page title
  document.title = getPageTitle(to.meta.title)

  if(hasToken){

    if(to.path==='/login'){
      next({ path: '/' })
    }else{
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if(hasRoles){
        next()
      }else{
        console.log(12313)

      }
    }
  }else{
    if(whiteList.includes(to.path)){
      next()
    }else{
      console.log(222)
      next(`/login?redirect=${to.path}`)
    }
  }

})
