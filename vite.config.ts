import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseURL = loadEnv(mode, __dirname).VITE_BASE_URL
  return {
    plugins: [
      viteMockServe({
        mockPath: "./mock/source", // 解析，路径可根据实际变动
        localEnabled: true ,// 此处可以手动设置为true，也可以根据官方文档格式
        supportTs: true,

      }),
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })

    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
      }
    },
    server: {
      https: false,
      host: '0.0.0.0', // ← 新增内容 ←
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      proxy: {
        '/marketing': {
          target: baseURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/marketing/, '')
        },
        '/couponPackageOrder': {
          target: baseURL,

          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/couponPackageOrder/, '')
        },
        '/product': {
          target: baseURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/product/, '')
        }
      }
    }
  }
})
