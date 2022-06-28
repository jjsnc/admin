import { MockMethod } from 'vite-plugin-mock'
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}
const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

const mocks= [
  {
    url: '/api/getUserInfo', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return 'hello world and get mockData'
    }
  },
  {
    url: '/vue-element-admin/user/info',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]
      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  }

] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档

export default mocks
