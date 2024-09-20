/*
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-11 09:36:58
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-19 10:29:13
 * @FilePath: \vite3\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 这里可以添加全局的 Sass 变量、混合宏等
  //       additionalData: `@import "@/styles/variables.scss";`
  //     }
  //   }
  // }
})
