<!--
 * @Author: 杨涛 2749552387@qq.com
 * @Date: 2024-09-19 09:48:21
 * @LastEditors: 杨涛 2749552387@qq.com
 * @LastEditTime: 2024-09-20 17:49:17
 * @FilePath: \vite3\src\view\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref,reactive, onMounted,resolveComponent,onBeforeUnmount  } from "vue";
import Facts from '@/components/Facts.vue'
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter();

interface menuType {
  icon: string;
  name: string;
}

const menuArray = reactive<menuType[]>([
    {
        icon : 'Position',
        name : '实况'
    },
    {
        icon : 'Timer',
        name : '趋势'
    },
    {
        icon : 'Histogram',
        name : '统计'
    },
    {
        icon : 'Iphone',
        name : '设备信息'
    }, 
    {
        icon : 'OfficeBuilding',
        name : '设备态势'
    },
    {
        icon : 'Tools',
        name : 'AI诊断'
    },
    {
        icon : 'Shop',
        name : '事件'
    },
    {
        icon : 'SwitchFilled',
        name : '巡检'
    }
])
// 返回首页
const backHome = ()=>{
    router.push({
        path: "/home",
    });
}
// 退出登录
const logout = ()=>{
    router.push({
        path: "/login",
    });
}
// 消息通知数据
const gridData = [
  {
    date: '2016-05-02',
    name: '合闸线圈发生动作',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: '分闸线圈发生动作',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: '合闸线圈发生动作',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: '分闸线圈发生动作分闸线圈发生动作分闸线圈发生动作分闸线圈发生动作分闸线圈发生动作',
    address: 'New York City',
  }
]

// 实时时间
const currentTime = ref<string>("");
const updateTime = () => {
  const now = new Date();
  currentTime.value = now
    .toISOString()
    .slice(0, 19)
    .replace("T", " "); // 格式化为 YYYY-MM-DD HH:mm:ss 
};
// tab切换
const currentTab = ref(0); // 默认选中的 Tab
const tabClick = (index)=>{
    currentTab.value = index
}

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
onMounted(async () => {
    updateTime(); // 初始化时间
      const interval = setInterval(updateTime, 1000); // 每秒更新
      onBeforeUnmount(() => clearInterval(interval)); // 清理定时器
});
   
</script>

<template>
   <div class="meiBody">
       <header class="headBox">
           <div class="leftBox">
                <div class="headBox-logo" @click="backHome">Midas Insight</div>
                <div class="headBox-midder">
                    <div class="itemtab" v-for="(item,index) in menuArray" :key="index" @click="tabClick(index)" :class="{ active: currentTab === index }" >
                        <el-icon :size="30" :color="currentTab === index ? '#f55834':'#ffffff'">
                            <component :is="item.icon" ></component>
                        </el-icon>  
                        <div class="nametab" :class="{ activeSize: currentTab === index }">{{ item.name }}</div>
                    </div>
                </div>
           </div>
              
           <div class="headBox-right">
               <div>{{ currentTime }}</div>
               <div class="fot-left">
                    <el-icon :size="20" :color="userColor">
                        <User />
                    </el-icon>
                    <el-popconfirm title="确定要退出登录吗？" @confirm="logout">
                        <template #reference>
                            <el-text class="mx-1">Admin</el-text>   
                        </template>
                    </el-popconfirm>
                    
                </div>
               <div>
                   <el-popover placement="bottom" :width="400" trigger="click">
                        <template #reference>
                            <el-badge :value="100" :max="99" class="item">
                                <el-icon :size="20"><BellFilled /></el-icon>
                            </el-badge>
                        </template>  
                        <el-table :data="gridData">
                            <el-table-column width="150" property="date" label="时间" />
                            <el-table-column width="100" property="name" label="名称" />
                            <el-table-column width="300" property="address" label="描述" /> 
                        </el-table>
                    </el-popover>
                   
                   
               </div>
               <div>
                   <el-icon :size="20"><Tools /></el-icon>
               </div>
               <div>
                   <el-icon :size="20"><RefreshLeft /></el-icon>
               </div>
           </div>
       </header>
       <main class="mainBox">
           <div v-if="currentTab == 0">
               <Facts />
           </div>
           <div v-if="currentTab == 1">趋势</div>
           <div v-if="currentTab == 2">统计</div>
           <div v-if="currentTab == 3">设备信息</div>
           <div v-if="currentTab == 4">设备态势</div>
           <div v-if="currentTab == 5">AI诊断</div>
           <div v-if="currentTab == 6">事件</div>
           <div v-if="currentTab == 7">巡检</div>
       </main>
   </div>
</template>

<style lang='scss' scoped>
@import 'index.scss'
</style>
