/*
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-11 09:37:28
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-20 11:39:56
 * @FilePath: \vite3\src\router\router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 第一个路由规则：  


export const routers = [
  {
    "path":"/",
    "redirect":'/login'
  },
  {
    "path":"/login",
    "name":"login",
    component:()=> import('../view/login/index.vue')
  },
  {
    "path":"/logincopy",
    "name":"logincopy",
    component:()=> import('../view/login/indexcopy.vue')
  },
  {
    "path":"/home",
    "name":"home",
    component:()=> import('../view/home/index.vue')
  },
  {
    "path":"/page1",
    "name":"page1",
    component:()=> import('../view//page1/index.vue')
  },
  {
    "path":"/page2",
    "name":"page2",
    component:()=> import('../view//page2/index.vue')
  },
  {
    "path":"/meipower",
    "name":"meipower",
    component:()=> import('../view//meipower/index.vue')
  }
]

 