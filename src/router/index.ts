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
    icon: 'House',
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
    icon: 'House',
    meta: {
      title: 'member',
      icon: 'lock'
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
      }
    ]
  },
  {
    path: '/supplier',
    component: Layout,
    redirect: '/supplier/supplierSet',
    alwaysShow: true, // will always show the root menu
    name: '商户',

    children: [
      {
        path: '/supplier/supplierSet',
        component: () => import('@/views/supplier/supplierSet/index.vue'),
        name: '商户管理',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: '/supplier/storeSet',
        component: () => import('@/views/supplier/storeSet/index.vue'),
        name: '酒店管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/hotel',
    alwaysShow: true, // will always show the root menu
    name: '商品',
    children: [
      {
        path: '/goods/hotel/goods/goodsHotel',
        component: () => import('@/views/goods/hotel/goodsHotel/index.vue'),
        name: '酒店商品'
      },
      {
        path: '/goods/hotel/goods/package',
        component: () => import('@/views/goods/hotel/package/index.vue'),
        name: '酒店套餐',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/goods/travel/travelLine/goods/package',
        component: () => import('@/views/goods/travel/travelLine/index.vue'),
        name: '旅游线路',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/goods/travel/ticket/goods/package',
        component: () => import('@/views/goods/travel/ticket/index.vue'),
        name: '门票',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/goods/goodsList/goodsTag',
        component: () => import('@/views/goods/goodsTag/index.vue'),
        name: '商品标签',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/goods/goodsList/goodsEvalute',
        component: () => import('@/views/goods/goodsEvalute/index.vue'),
        name: '商品评价',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/hotelOrder',
    alwaysShow: true, // will always show the root menu
    name: '订单',
    children: [
      {
        path: '/order/hotelOrder',
        component: () => import('@/views/order/hotelOrder/index.vue'),
        name: '酒店订单'
      },
      {
        path: '/order/setMealOrder',
        component: () => import('@/views/order/setMealOrder/index.vue'),
        name: '套餐订单',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/order/hotelChildOrder',
        component: () => import('@/views/order/hotelChildOrder/index.vue'),
        name: '酒店子订单',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/order/reservationList',
        component: () => import('@/views/order/reservationList/index.vue'),
        name: '预约单',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/order/setTicketsOrder',
        component: () => import('@/views/order/setTicketsOrder/index.vue'),
        name: '门票订单',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/order/group',
        component: () => import('@/views/order/group/index.vue'),
        name: '团单订单',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/order/couponBag',
        component: () => import('@/views/order/couponBag/index.vue'),
        name: '券包订单',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/coupon',
    alwaysShow: true, // will always show the root menu
    name: '营销',
    children: [
      {
        path: '/sms/coupon',
        component: () => import('@/views/sms/coupon/index.vue'),
        name: '券管理'
      },
      {
        path: '/sms/couponUsage',
        component: () => import('@/views/sms/couponUsage/index.vue'),
        name: '优惠券使用明细',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/sms/send/list',
        component: () => import('@/views/sms/sendList/index.vue'),
        name: '系统下发任务',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/sms/exchangeCode',
        component: () => import('@/views/sms/exchangeCode/index.vue'),
        name: '兑换码管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/sms/send/pList',
        component: () => import('@/views/sms/sendPList/index.vue'),
        name: 'P值管理'
      },
      {
        path: '/sms/examine',
        component: () => import('@/views/sms/examine/index.vue'),
        name: '审核管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/sms/couponBag',
        component: () => import('@/views/sms/couponBag/index.vue'),
        name: '券包管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/sms/marketingActivityTool',
        component: () => import('@/views/sms/marketingActivityTool/index.vue'),
        name: '营销活动',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/sms/groupManagement',
        component: () => import('@/views/sms/groupManagement/index.vue'),
        name: '拼团管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/coupon',
    alwaysShow: true, // will always show the root menu
    name: '运营',
    children: [
      {
        path: '/oms/banners',
        component: () => import('@/views/oms/banners/index.vue'),
        name: '广告位管理'
      },
      {
        path: '/oms/city',
        component: () => import('@/views/oms/city/index.vue'),
        name: '城市管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/oms/selection',
        component: () => import('@/views/oms/selection/index.vue'),
        name: '选品集管理',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/oms/recommend',
        component: () => import('@/views/oms/recommend/index.vue'),
        name: '商品推荐',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/oms/topic',
        component: () => import('@/views/oms/topic/index.vue'),
        name: '专题管理'
      },
      {
        path: '/oms/keyword',
        component: () => import('@/views/oms/keyword/index.vue'),
        name: '关键词搜索',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/strategy',
    component: Layout,
    redirect: '/strategy/list',
    alwaysShow: true, // will always show the root menu
    name: '目的地攻略',
    meta: {
      title: 'member',
      icon: 'lock'
    },
    children: [
      {
        path: '/strategy/list',
        component: () => import('@/views/strategy/list/index.vue'),
        name: '攻略列表',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/wechatPub',
    component: Layout,
    redirect: '/wechatPub/list',
    alwaysShow: true, // will always show the root menu
    name: '公众号',
    meta: {
      title: 'member',
      icon: 'lock'
    },
    children: [
      {
        path: '/wechatPub/keywords',
        component: () => import('@/views/wechatPub/keywords/index.vue'),
        name: '关键字回复',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/wechatPub/templateMsgs',
        component: () => import('@/views/wechatPub/templateMsgs/index.vue'),
        name: '模版消息',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/set/appVersion',
    alwaysShow: true, // will always show the root menu
    name: '设置',
    children: [
      {
        path: '/set/appVersion',
        component: () => import('@/views/set/appVersion/index.vue'),
        name: 'app版本管理'
      },
      {
        path: '/set/basicConfig',
        component: () => import('@/views/set/basicConfig/index.vue'),
        name: '基础配置',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/set/sendMessage',
        component: () => import('@/views/set/sendMessage/index.vue'),
        name: '发送短信',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/set/opeLog',
        component: () => import('@/views/set/opeLog/index.vue'),
        name: '操作日志',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: '/set/messageLog',
        component: () => import('@/views/set/messageLog/index.vue'),
        name: '短信日志'
      }
    ]
  }
]

const routes: Array<RouteRecordRaw> = [...constantRoutes]
// console.log(import.meta.env.MODE, 'import.meta.env.MODE')
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
