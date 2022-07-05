import { createApp } from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementPlus from 'element-plus'

import App from '@/App.vue'

import router from '@/router/index'

import store from '@/store/index'

import '@/styles/index.scss' // global css

import '@/permission' // permission control

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).use(store).use(ElementPlus).mount('#app')
