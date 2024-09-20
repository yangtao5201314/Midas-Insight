/*
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-11 09:37:28
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-19 09:49:33
 * @FilePath: \vite3\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { routers } from './router'

const router = createRouter({
    history: createWebHistory(), //模式配置 hash模式
    routes:routers as RouteRecordRaw[]
})

export default router