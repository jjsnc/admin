import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getUserInfo', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return 'hello world and get mockData'
    }
  }
] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
