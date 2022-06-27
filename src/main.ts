import { createApp } from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementPlus from 'element-plus'

import App from './App.vue'

import router from './router/index'

import store from './store/index'

import '@/styles/index.scss' // global css

import './permission' // permission control

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
