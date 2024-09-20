/*
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-11 09:37:28
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-19 13:57:13
 * @FilePath: \vite3\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';

import './style.css'
//全局引入element
import ElementPlus from 'element-plus' 
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
// ...

// 完整导入 表格库
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

import FitScreen from '@fit-screen/vue'
  
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(VxeUI)
app.use(VxeUITable)
app.use(router)
app.use(FitScreen)

app.mount('#app')




// package.json
// "build": "vue-tsc -b && vite build",
